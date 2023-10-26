<template>
    <el-card class="join-page_stores">
        <h2>Rejoignez dès maintenant l'aventure GreenHarvest sur notre application mobile.</h2>
        <img src="public/app-store.png" width="200">
        <img src="public/google-play.png" width="220">
    </el-card>

    <div class="join-page_views">
        <img src="public/app_1.png" width="450">
        <img src="public/app_2.png" width="480">    
    </div>
</template>

<style>
.join-page_stores {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1em auto;
    width: 70%;
    color: #FFF;
    text-align: center;
    border-radius: 1em;
    background-color: var(--el-color-primary);
}

.join-page_stores img {
    margin: 0 1em 0 1em;
}

.join-page_views {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 1em;
}
</style>