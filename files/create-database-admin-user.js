const DATABASE = 'admin';

let conn;
while(!conn) {
  try {
    conn = new Mongo();
  }
  catch(err) {
    sleep(100);
  }
}

const db = conn.getDB(DATABASE);

console.log('Creating admin user');
const result = db.createUser(
  {
    user: "admin",
    pwd: passwordPrompt(),
    roles: [ { role: "root", db: DATABASE } ]
  }
);

if (!result || !result.ok || result.ok !== 1) {
  console.log('[JAVASCRIPT] -- Error on db.createUser()');
  exit(1);
}