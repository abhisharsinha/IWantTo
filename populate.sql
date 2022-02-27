INSERT INTO ACTIVITY (name) VALUES (1, 'cricket'), (2, 'hockey'), (3, 'chess'), (4, 'volleyball'), (5, 'football'), (6, "swimming");
insert into users (id, username, first_name, last_name, email) values (1, 'abhishar', 'Abhishar', 'Sinha', 'ai20mtech01002@iith.ac.in'), 
(2, 'keval', 'Keval', 'Malde', 'cs20mtech01003@iith.ac.in'), (3, 'lavo', 'Anilava', 'Kundu', 'cs20mtech01002@iith.ac.in');
insert into interests (UID, AID) VALUES (1, 1), (1, 2), (2, 1), (3, 4);
insert into events (title, description, event_time, online) values ('football match', 'Very interesting football match', current_time, false), ('hockey match', 'Very interesting hockey game', current_time, false)