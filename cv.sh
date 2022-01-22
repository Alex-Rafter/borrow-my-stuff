#!/usr/bin/env bash
csvFile=lending-library.csv
dbFile=./db/borrow.db
dbFileBak=./db/bak/borrow.db.bak
jsonFile=./static/data/lend.json

curl -sS 'https://docs.google.com/spreadsheets/d/1i_iNmcwP7lx8rMpCB4fFNal3F46wV7lrJRIOxqGxXHA/gviz/tq?tqx=out:csv' > "$csvFile";
awk -i inplace -F, -v OFS=',' '{gsub(/["]/,""); print $1,$2,$3}' "$csvFile";

mv "$dbFile" "$dbFileBak";

sqlite3.exe "$dbFile" <<EOF
.headers on
.mode csv
.import "$csvFile" lend
.mode json
.output $jsonFile
select * from lend
EOF

rm "$csvFile";
