use self::models::*;
use diesel::prelude::*;
use rust_crud::*;

pub fn read_posts() -> Vec<rust_crud::models::Post> {
    use self::schema::posts::dsl::*;

    let connection = &mut establish_connection();
    let results = posts
        .filter(published.eq(true))
        .limit(5)
        .load::<Post>(connection)
        .expect("Error loading posts");

    return results;
}
