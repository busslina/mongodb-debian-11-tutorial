# MongoDB Debian 11 Install Tutorial

## 1. Introduction

**Target:** `Debian 11`

**Home directory:** `/var/lib/mongodb`

**OS user:** `mongodb`

**Service name:** `mongodb`

## 2. Creating username

```
useradd --create-home --home-dir /var/lib/mongodb mongodb
```

## 3. Creating file structure

-   `Config`
-   `Database`
-   `Logs`

```
cd /var/lib/mongodb && mkdir database config logs
```

## 4. Download TGZ files

-   `MongoDB`
-   `MongoDB Shell`
-   `MongoDB Tools`

```
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-debian11-7.0.4.tgz
wget https://downloads.mongodb.com/compass/mongosh-2.1.0-linux-x64.tgz
wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian11-x86_64-100.9.3.tgz
```

## 5. Extract files into home directory

```
tar xvf mongodb-linux-x86_64-debian11-7.0.4.tgz -–directory /var/lib/mongodb
tar xvf mongosh-2.1.0-linux-x64.tgz --directory /var/lib/mongodb
tar xvf mongodb-database-tools-debian11-x86_64-100.9.3.tgz --directory /var/lib/mongodb
```

## 6. Remove TGZ files

```
rm -r *.tgz
```

## 7. Create symlinks in home directory

-   `mongod`
-   `mongosh`
-   `mongodump`
-   `mongorestore`

```
ln -s /var/lib/mongodb/mongodb-linux-x86_64-debian11-7.0.4/bin/mongod /var/lib/mongodb
ln -s /var/lib/mongodb/mongosh-2.1.0-linux-x64/bin/mongosh /var/lib/mongodb/
ln -s mongodb-database-tools-debian11-x86_64-100.9.3/bin/mongodump
ln -s mongodb-database-tools-debian11-x86_64-100.9.3/bin/mongorestore
```

## 8. Setup service files into config directory

-   Cold service file: `/var/lib/mongodb/config/mongodb-cold.service`
-   Production service file: `/var/lib/mongodb/config/mongodb-production.service`

```
chmod 400 /var/lib/mongodb/config/mongodb-cold.service
chmod 400 /var/lib/mongodb/config/mongodb-production.service
```

## 9. Change ownership recursively

```
chown -R mongodb:mongodb /var/lib/mongodb/*
chmod g-rwx -R /var/lib/mongodb/*
chmod o-rwx -R /var/lib/mongodb/*
```

## 10. Start service in Cold mode

```
cp config/mongodb-cold.service mongodb.service
systemctl enable /var/lib/mongodb/mongodb.service
systemctl start mongodb
```

## 11. Create database user admin

-   Setup database admin user file: `/var/lib/mongodb/config/create-database-admin-user.js `
-   Execute script and provide password

```
/var/lib/mongodb/mongosh --nodb /var/lib/mongodb/config/create-database-admin-user.js
```

## 12. Setup config file (TLS mode)

Config file (TLS mode): `/var/lib/mongodb/config/mongod-tls.config`

## 13. Setup keyCert file

```
cat /etc/letsencrypt/live/xxx/fullchain.pem > /var/lib/mongodb/config/mongodbCertAndKey.pem
cat /etc/letsencrypt/live/xxx/privkey.pem >> /var/lib/mongodb/config/mongodbCertAndKey.pem
chown mongodb:mongodb /var/lib/mongodb/config/mongodbCertAndKey.pem
chmod 400 /var/lib mongodb/config/mongodbCertAndKey.pem
```

## 14. Restart service in Production mode

```
systemctl stop mongodb 
systemctl disable mongodb 
rm mongodb.service 
cp config/mongodb-production.service mongodb.service 
systemctl daemon-reload 
systemctl enable /var/lib/mongodb/mongodb.service 
systemctl start mongodb.service
```

## 15. Extra

-   Port `27017` must be open. 


-   A `valid certificate` for our domain must be available 