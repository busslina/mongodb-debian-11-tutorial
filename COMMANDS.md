# MongoDB Debian 11 Commands Tutorial

### 1.  Starts `daemon` manually
```
mongod --dbpath /var/lib/mongodb/database --config /var/lib/mongodb/config/mongod.conf
```

### 2.  Connects from localhost but not opening any database
```
mongosh --nodb
```

### 3.  Connects from remote to `admin` database with `admin` user (password is prompted)
```
mongosh your.domain.com/admin --tls -u admin -p
```

### 4.  Creates a backup
```
mongodump --host your.domain.com --ssl -u admin --password=$password --archive=mongodb.backup
```

### 5.  Restores a backup
```
mongorestore --host your.domain.com --ssl -u admin --archive=mongodb.backup
```

