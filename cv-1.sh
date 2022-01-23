#!/usr/bin/env bash
csvFile=l-lib.csv

curl -sS 'https://docs.google.com/spreadsheets/d/1i_iNmcwP7lx8rMpCB4fFNal3F46wV7lrJRIOxqGxXHA/gviz/tq?tqx=out:csv&sheet=main' > "$csvFile";
awk -i inplace -F, -v OFS=',' '{gsub(/["]/,""); print $1,$2,$3}' "$csvFile";

sqlite3.exe temp.db <<EOF
.headers on
.mode csv
.import "$csvFile" lend
.mode json
.output temp.json
select * from lend
EOF

rm "$csvFile";
