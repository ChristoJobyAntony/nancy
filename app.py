from concurrent.futures import process
import signal
import nancy
import sys
import subprocess
import os
app = nancy.create_app()

if __name__ == '__main__':
    
    if len(sys.argv) == 1 : 

        def on_terminate_handler (signal, frame, process:subprocess.Popen) :
            process.terminate()
            process.wait()
            print("test")
            exit(1)
        
        print("running")
        env = dict(os.environ)
        env['SCRIPT_NAME'] = '/nancy'
        pro = subprocess.Popen(
            'gunicorn app:app -b localhost:5002 --workers 1'.split(" "), 
            stdout=subprocess.PIPE, 
            env=env,
        )
        signal.signal(signal.SIGINT, handler=lambda s, f : on_terminate_handler(s, f, pro))
        pro.wait()




    elif sys.argv[1] == 'dev' :
        app.run("localhost", 5002)