# MongoDB Debian 11 Commands Tutorial

## 1. Connection

1.  Connects from localhost but not opening any database
```
mongosh --nodb
```

2.  Connects from remote
```
mongosh amazon.busslina.com/admin --tls -u admin -p
```