/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postContainer = document.querySelector(".posts");
const posts = document.querySelector("posts");


// 2. Voici ma base de données factise 
const posts_arr =
    [
        {
            titre: "SEO, les bonnes pratiques",
            hashtag: "#SEO",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Bien, les bonnes pratiques",
            hashtag: "#JS",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Content, les bonnes pratiques",
            hashtag: "#PHP",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        }
    ];
console.log(posts_arr[0].titre); // Affiche le titre du premier article
console.log(posts_arr[1].extrait); // Affiche l'extrait du deuxième article

// 3. Je parcours la bdd
 
for (const post_obj of posts_arr) {
    console.log(post_obj.titre); // Affiche le titre de chaque article
}

// 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD
posts_arr.forEach(function (post) {
    const postElement =
        `<div class="post">
        <div class="post-titre">
            <a href="${post.link}">${post.titre}</a>
            </div>
            <div class="post-extrait">
                ${post.extrait}
            </div>
            <div class="post-hashtag">
                ${post.hashtag}
            </div>
    </div>`
        ;
    // 5. Je l'ajoute dans le conteneur de publication
    postContainer.innerHTML += postElement;

});