#!/bin/sh

user=root
passwd=tiancheng2016!
host=localhost

for i in `mysqladmin processlist -u$user -p$passwd -h$host | grep -i sleep | awk '{print $2}'`
do
  mysqladmin -u$user -p$passwd -h$host kill $i
done