## Getting Started

After cloning repo

```bash
git clone https://github.com/ZiyaadLakay/art-gallery.git
```

Make sure you have python installed

```bash
# first do:
sudo apt-get update
# after do:
sudo apt-get install python3.[latest version]
```

or for Windows go to https://www.python.org/downloads/

cd Into folder art-gallery/

Then create your enviroment

```bash
python3 -m venv venv
```

Then tell the system you want to use enviroment

```bash
source venv/bin/activate
```

Then install packages

```bash
pip3 install flask
```

Then tell flask how to import your application

```bash
export FLASK_APP=server.py
```

Then run your application

```bash
flask run
```
