FROM ubuntu:18.04

WORKDIR /home/

COPY . .

RUN bash ./setup.sh

ENV PATH="/root/.cargo/bin:$PATH"

RUN cd ../rust-crud

RUN cargo install
