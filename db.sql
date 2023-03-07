

---Table Users
CREATE TABLE IF NOT EXISTS public.users
(
	id serial primary key,
	username varchar(200),
	password varchar(200),
	name varchar(200)
)
