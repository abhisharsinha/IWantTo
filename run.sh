
sudo -u postgres /usr/bin/psql -c "CREATE DATABASE IWantTo;" postgres
echo "Database IWantTo created!!"

sudo -u postgres /usr/bin/psql -f "./create.sql" iwantto
echo "Tables have been created!!"

sudo -u postgres /usr/bin/psql -f "./populate.sql" iwantto
echo "Successfully populated the database!!"

