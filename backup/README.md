# MongoDB Debian 11 Backup Tutorial

## 1. Introduction

This tutorial explores two situations:

-   `Cold mode` for `localhost` access
-   `Production mode` for `remote` access

## 2. Creating username

```
useradd --create-home --home-dir /var/lib/mongodb mongodb
```
