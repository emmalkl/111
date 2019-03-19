var newhobby=['吃泡面','swiming','highbrothers'];
db.user.update({name:'alin3'},{$addToSet:{hobby:{$each:newhobby}}})