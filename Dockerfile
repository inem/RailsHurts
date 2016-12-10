FROM ruby:2.3

RUN apt-get update -yqqq
RUN apt-get install -y nodejs openjdk-7-jre