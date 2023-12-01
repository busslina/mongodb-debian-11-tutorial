# MongoDB Debian 11 Backup Tutorial

## 1. Introduction

This tutorial explores two situations:

-   `Cold mode` for `localhost` access
-   `Production mode` for `remote` access

## 2. Installing MongoDB Tools

In my case, I have a Debian 9 (WSL) machine, for other cases see here: https://www.mongodb.com/try/download/database-tools

```
mkdir -p ~/bin && cd ~/bin
wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian92-x86_64-100.9.3.tgz
tar xvf mongodb-database-tools-debian92-x86_64-100.9.3.tgz
ln -s mongodb-database-tools-debian92-x86_64-100.9.3/bin/mongodump
ln -s mongodb-database-tools-debian92-x86_64-100.9.3/bin/mongorestore
```

## 3. Installing MongoDB Shell
