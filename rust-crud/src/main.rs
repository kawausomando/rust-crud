#[macro_use] extern crate rocket;

use rocket::response::content;

mod cruds;
mod models;

#[get("/")]
fn index() -> content::RawJson<&'static str> {
    content::RawJson("{ 'hi': 'world' }")
    // cruds::read_posts()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
