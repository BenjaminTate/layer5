FROM python:3.7

RUN pip install httpx "pydantic==1.5.1" pygithub

COPY ./MiT /app

CMD ["python", "/app/main.py"]
