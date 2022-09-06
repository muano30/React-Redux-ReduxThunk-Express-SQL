CREATE TABLE students(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    id_number NUMERIC(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    date_created TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE admin_person(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    id_number NUMERIC(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    date_created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE books(
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(1000) NOT NULL,
        author VARCHAR(1000) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        admin_person_id BIGINT REFERENCES admin_person(id) NULL,
        date_created TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE books_lookup(
    id BIGSERIAL NOT NULL PRIMARY KEY,
     students_id BIGINT REFERENCES students(id) NOT NULL,
     books_id BIGINT REFERENCES books(id) NOT NULL,
     date_created TIMESTAMP DEFAULT NOW()
);

INSERT INTO books(
    name,
    author,
    description
)
VALUES
('ABSALOM, ABSALOM!', 'WILLIAM FAULKNER', 'This quotation for
Faulkners 1936 novel comes from the Books of Samuel more specifically,
19:4 in 2 Samuel, which is in the Old Testament and relates some of the
history of Israel. Absalom, the third son of David, rebelled against his
father and was killed in battle. The full Biblical sentence is But the king
covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom,
my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee,
Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee,
Jerusalem, let my right hand forget its skill.' ),

('A TIME TO KILL','JOHN GRISHAM', 'This one is from 3:3 in the Ecclesiastes, again part of
the Old Testament. The anonymous author is a King of Jerusalem who relates and analyses events
in his own life. This has resonated strongly with a lot of people: Abraham Lincoln quoted Ecclesiastes 
when addressing Congress in 1862, and the novelist Thomas Wolfe called it the greatest single
piece of writing I have ever known. Grishams 1989 title is taken from the line that
[To every thing there is a season, and a time to every purpose under the heaven:] A time
to kill, and a time to heal; a time to break down, and a time to build up…'),

('THE HOUSE OF MIRTH','EDITH WHARTON', 'Another Ecclesiastes quotation, this time from line 7:4.
A brilliant sentence: The heart of the wise is in the house of mourning; but the heart of fools 
is in the house of mirth. One of Whartons best-known novels, it came out in 1905.'),

('EAST OF EDEN', 'JOHN STEINBECK', 'Steinbeck apparently considered this 1952 novel to be his
magnum opus, the one which all other novels before it had merely been practice for. The title
is suitably grand. Taken from Genesis, the first book of the Old Testament, it refers to line 4:16,
after Cain has slain his brother Abel. And Cain went out from the presence
of the Lord, and dwelt in the land of Nod, on the east of Eden.'),

('THE SUN ALSO RISES', 'ERNEST HEMINGWAY', 'More Ecclesiastes! This particular quotation is
from 1:5, which states that The sun also ariseth, and the sun goeth down, and hasteth to
his place where he arose. Hemingways modernist novel came out in 1926.'),

('VILE BODIES', 'EVELYN WAUGH', 'Waugh took the title for his 1930 novel from Philippians,
full name Epistle to the Philippians, which is part of the New Testament and generally attributed 
to Paul the Apostle. Most scholars consider it to be a collection of letter fragments sent from Paul
to the church of Philippi, a city on the Greek island of Thasos. The line in question is 3:21 and refers 
to Jesus Christ, [w]ho shall change our vile body, that it may be fashioned like unto his glorious body, 
according to the working whereby he is able even to subdue all things unto himself.'),

('A SCANNER DARKLY', 'PHILIP K. DICK', 'One of Dicks most famous novels (published in 1977), its title 
is taken from the First Epistle to the Corinthians. Like above, its written by Paul the Apostle, this
time to the church in Corinth. The line, 13:12, goes For now we see through a glass, darkly; but then
face to face: now I know in part; but then shall I know even as also I am known. Its a particularly 
well-known one, and its opening words have often been used as famous book titles to other works, such
as Sheridan Le Fanus 1872 short story collection In a Glass Darkly and Karleen Koens 1986 historical 
fiction novel Through a Glass Darkly (its sequel continues the quotation, being called Now Face to Face).'),

('MOAB IS MY WASHPOT','STEPHEN FRY','Undoubtedly an odd quotation; it comes from line 60:8 of 
the Book of Psalms in the Old Testament, which reads in full Moab is my washpot; over Edom will
I cast out my shoe: Philistia, triumph thou because of me. The context is that people would often use 
washpots to clean their feet of sand after roaming the desert, and Moab, a kingdom of Jordan which was
often warring against the Israelites, needed to be overcome. The Israelites therefore likened these containers 
to the kingdom. Fry chose this as the title for his 1997 autobiography as he considered the book to be scrubbing at
the grime of years.'),

('NUMBER THE STARS','LOIS LOWRY','Although shes most famous for her dystopian novel The Giver,
1989 novel Number the Stars focuses on the life of a Jewish family living in Copenhagen
during World War II. In line 147:4, the Psalms declares that He [God] telleth the number of the 
stars; he calleth them all by their names. The quotation is also used for its connotations of the
Star of David associated with Judaism.'),

('COLD COMFORT FARM', 'STELLA GIBBONS', 'Gibbonss 1932 classic about a deeply
unpleasant farm, a satire of typical Victorian rural fiction, has a title taken from Act
V Scene VII of King John, spoken by the titular character.

…I do not ask you much,
tI beg cold comfort; and you are so strait
And so ingrateful, you deny me that.'),

('IN COLD BLOOD','TRUMAN CAPOTE', 'Here we have another Timon of Athens quotation. For
his 1966 nonfiction account of a notorious family murder, Capote selected a line from Alcibiades
speech in Act III Scene V Who cannot condemn rashness in cold blood? Committing crimes cold-bloodedly
has long been a staple of speech, however.'),

('BAND OF BROTHERS','STEPHEN E. AMBROSE', 'This 1992 historical nonfiction book about World War II was later
popularised by a dramatic TV miniseries in 2001, produced by Steven Spielberg and Tom Hanks. The quotation is 
taken from Henry V, Act IV Scene III, in a speech delivered by Henry himself to rouse his troops on St Crispins 
Day before the famed 1415 Battle of Agincourt.

We few, we happy few, we band of brothers;
For he to-day that sheds his blood with me
Shall be my brother…'),

('THE SOUND AND THE FURY','WILLIAM FAULKNER', 'Another Faulkner! This 1929 title comes 
from Macbeths famed soliloquy in Act V Scene V, delivered as Scottish troops are approaching 
his castle. Its the ending of the aforementioned Tomorrow and tomorrow and tomorrow
quotation.

… it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.'),

('AS I LAY DYING', 'WILLIAM FAULKNER', 'Yet more Faulkner! This 1930 title comes from a translation 
of Homers ancient Greek poem The Odyssey, published in 1925 by William Marris. In its Book XI, the
dead Agamemnon tells Odysseus that As I lay dying, the woman with the dogs eyes would not close my 
eyes as I descended into Hades. He is here referring to his murderous, adulterous wife Clytemnestra. 
Considering he SACRIFICED THEIR DAUGHTER IPHIGENIA just so he could go off and fight, one really cannot
blame her.'),

('A PASSAGE TO INDIA' ,'E.M. FORSTER', 'Forsters 1924 novel is often cited as one of his best works, 
alongside such classics as A Room with a View. The title is a quotation from Walt Whitmans 1855 poetry
collection Leaves of Grass. It isnt actually one specific line from within the poems themselves, but 
the title for a section of verses which have this line as a refrain. One of the most famous lines from
Leaves of Grass is possibly I sing the body electric, which gives its name to a 1969 short-story collection
by Ray Bradbury (and a song by Lana del Rey!)');





