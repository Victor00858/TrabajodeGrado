FROM tensorflow/tensorflow:latest-gpu-jupyter
WORKDIR /app 

COPY . . 

RUN python3 -m venv /opt/venv 

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
	&& rm -rf /var/lib/apt/lists/*
    

RUN apt-get -y autoremove

COPY requirements.txt .

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt 

