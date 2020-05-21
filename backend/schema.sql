CREATE TABLE IF NOT EXISTS "trips" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT,
	"description"	TEXT,
	"city"	TEXT,
	"state"	INTEGER,
	"difficulty"	INTEGER,
	"activities"	TEXT
);

CREATE TABLE IF NOT EXISTS "states" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"code"	TEXT
)