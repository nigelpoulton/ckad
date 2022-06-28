FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
RUN pip install psycopg2==2.9.3
COPY . /app/

CMD python manage.py runserver 0.0.0.0:8000
