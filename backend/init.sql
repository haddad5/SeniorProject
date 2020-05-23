INSERT INTO trips (id, name, description, city, state, difficulty) VALUES
(1, 'WoW Campout','Have a blast at the local Whip-o-Whil campground right on the Souhegan river.  With plenty of open space for tents, but still plenty of woods to explore.','Merrimack',1,1),
(2, 'Mount Liber','Enjoy this fantastic hike with great views.  Dispersed camping is offered, which can be a great overnight.','Lincoln',1,3),
(3, 'Mt. Washing','Head up the Ammonoosuc Ravine Trail to Lakes of the Clouds Hut. Break for a snack. Continue on the Crawford Path to the summit of Mt. Washington.','Coos Count',1,4),
(4, 'The Decalibron','Touch the summits of four 14''ers in Colorado. Mt. Democrat, Mt., Liberty, Mt, Bross, Mt Cameron. Start before sunrise to avoid afternoon thunderstorms. 7.6 miles round trip but due to elevation it will take a lot of effort. At least 24 hours of acclimatizing required.','Alma',2,5),
(5, 'Connecticut River Canoe Trip','Park and put in near NH/VT border near Lebanon NH.  30 mile paddle drown river.  Lots of camping options along the way.  Makes for a great 3day/2night weekend.','Lebanon',1,3),
(6, 'Umbagog Canoe Trip','Multi-day/night paddle across Lake Umbagog.  Lots of camping options on islands.','Errol',1,3);

INSERT INTO states (id, code) VALUES
(1, 'NH'),(2, 'CO');

INSERT INTO activities (id, name) VALUES
(1, 'First year requirements'),
(2, 'Backwoods Engineering'),
(3, 'Hiking'),
(4, 'Dispersed Camping'),
(5, 'Orienteering'),
(6, 'Canoeing'),
(7, 'Camping'),
(8, 'Swimming');

INSERT INTO trip_activities (trip_id, activity_id) VALUES
(1,1),(1,2),--First year requirements, Backwoods Engineering
(2,3),(2,4),--Hiking, Dispersed Camping
(3,3),(3,5),--Hiking, Orienteering
(4,3),(4,5),--Hiking, Orienteering
(5,6),(5,7),--Canoeing, Camping
(6,6),(6,7),(6,8);--Canoeing, Camping, Swimming