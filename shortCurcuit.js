let authorizeUser = true;
let data;
//normal conditional state

if(authorizeUser){
    showgreetings(authorizeUser);
}
//Using short-circuiting

authorizeUser && showgreetings(authorizeUser);