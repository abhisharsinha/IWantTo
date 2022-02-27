INSERT INTO ACTIVITY (name) VALUES ('cricket'), ('hockey'), ('chess'), ('volleyball'), ('football'), ("swimming");
insert into users (id, username, first_name, last_name, email) values (1, 'abhishar', 'Abhishar', 'Sinha', 'ai20mtech01002@iith.ac.in'), 
(2, 'keval', 'Keval', 'Malde', 'cs20mtech01003@iith.ac.in'), (2, 'lavo', 'Anilava', 'Kundu', 'cs20mtech01002@iith.ac.in');
insert into interests (UID, AID) VALUES (41, 1), (41, 2), (43, 1), (43, 4);
insert into events (title, description, event_time, online) values ('football match', 'Very interesting football match', current_time, false), ('hockey match', 'Very interesting hockey game', current_time, false)