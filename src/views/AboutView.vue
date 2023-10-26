<template>
<div class="about-page">
<div>
<h2>Bienvenue sur GreenHarvest</h2>
<p>La plateforme dédiée aux amoureux du jardinage et à tous ceux qui souhaitent contribuer à créer un espace vert durable et florissant dans leur communauté.</p>

<h2>Qui sommes-nous ?</h2>
<p>Nous sommes une équipe passionnée par le jardinage et l'environnement. Nous croyons en la puissance des communautés pour faire une différence tangible dans notre monde, un jardin à la fois. Nous sommes ici pour faciliter la création, la coordination et la gestion des jardins participatifs dans votre ville.</p>

<h2>Notre mission</h2>
<p>Notre mission est de mettre en relation les jardiniers, les volontaires et les passionnés de nature pour collaborer et créer des jardins extraordinaires où les légumes frais et les belles fleurs prospèrent. Nous visons à promouvoir la durabilité, l'éducation environnementale et le bien-être dans nos communautés.</p>

<h2>Comment ça marche ?</h2>
<p>Notre application vous permet de participer à des jardins existants ou de démarrer votre propre projet de jardin participatif. Gagnez des crédits en participant activement, que ce soit en arrosant, en labourant ou en prenant part à d'autres activités de jardinage. Utilisez vos crédits pour réclamer votre part de la récolte !</p>

<h2>Nous contacter</h2>
<p>Nous sommes toujours ravis de recevoir des commentaires, des questions ou des suggestions. N'hésitez pas à nous contacter à contact@greenharvest.fr pour toute demande ou question.</p>
</div>
<img src="@/assets/conf.png">
</div>
</template>

<style scoped>
h2 {
    font-family: 'Permanent Marker', cursive;
    color: var(--el-color-primary);
}
.about-page {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1em auto;
    width: 90%;
    text-align: center;
    border-radius: 1em;
}

.about-page img {
    width: 600px;
    height: 100%;
    margin: 1em;
    border-radius: 1em;
}
</style>