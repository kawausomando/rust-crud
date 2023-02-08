#[macro_use] extern crate rocket;
use rocket::serde::{json::Json};
use rust_crud::models::Post;

mod cruds;
mod models;


#[get("/")]
fn index() -> Json<Vec<Post>> {
    return Json(cruds::read_posts());
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
