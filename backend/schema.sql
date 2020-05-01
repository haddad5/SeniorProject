CREATE TABLE IF NOT EXISTS "trips" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT,
	"description"	TEXT,
	"city"	TEXT,
	"state"	TEXT,
	"difficulty"	INTEGER,
	"activities"	TEXT
);
