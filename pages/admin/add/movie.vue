<script setup>
import { useAdmin } from "~/stores/useAdmin";

definePageMeta({
    layout: 'admin'
})

onMounted(() => {
    if (document.querySelector('#filter__sort')) {
        new SlimSelect({
            select: '#filter__sort',
            settings: {
                showSearch: false,
            }
        });
    }

    /* add page */
    if (document.querySelector('#sign__quality')) {
        new SlimSelect({
            select: '#sign__quality',
            settings: {
                showSearch: false,
            }
        });
    }

    if (document.querySelector('#sign__genre')) {
        new SlimSelect({
            select: '#sign__genre',
            settings: {
                placeholderText: 'Choose genre',
            }
        });
    }

    if (document.querySelector('#sign__country')) {
        new SlimSelect({
            select: '#sign__country',
            settings: {
                placeholderText: 'Choose country',
            }
        });
    }

    if (document.querySelector('#sign__director')) {
        new SlimSelect({
            select: '#sign__director',
            settings: {
                placeholderText: 'Choose director',
            }
        });
    }

    if (document.querySelector('#sign__actors')) {
        new SlimSelect({
            select: '#sign__actors',
            settings: {
                placeholderText: 'Choose actors',
            }
        });
    }
})

const name = ref('')
const year = ref('')
const description = ref('')
const cover = ref('')
const genre = ref('')
const admin = useAdmin()


async function handleAddMovie (){
    const movie = {
        name: name.value,
        year: year.value,
        description: description.value,
        banner: cover.value,
        genre: genre.value,
    }
    const {data} = await admin.addMovie(movie)

    if(data){
        name.value = ''
        year.value = ''
        description.value = ''
        cover.value = ''
        genre.value = ''
    }

    console.log(data)
}

const uploadCover = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        cover.value = e.target.result
    }
    reader.readAsDataURL(file)
}

</script>

<template>
    <!-- main content -->
    <main class="main">
        <div class="container-fluid">
            <div class="row">
                <!-- main title -->
                <div class="col-12">
                    <div class="main__title">
                        <h2>Add new item</h2>
                    </div>
                </div>
                <!-- end main title -->

                <!-- form -->
                <div class="col-12">
                    <form action="#" class="sign__form sign__form--add">
                        <div class="row">
                            <div class="col-12 col-xl-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="sign__group">
                                            <input v-model="name" type="text" class="sign__input" placeholder="Title">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="sign__group">
                                            <textarea v-model="description" id="text" name="text" class="sign__textarea"
                                                placeholder="Description"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="sign__group">
                                            <div class="sign__gallery">
                                                <label id="gallery1" for="sign__gallery-upload">Upload cover
                                                    (240x340)</label>
                                                <input @change="uploadCover" data-name="#gallery1" id="sign__gallery-upload" name="gallery"
                                                    class="sign__gallery-upload" type="file" accept=".png, .jpg, .jpeg"
                                                    multiple="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-xl-5">
                                <div class="row">
                                    <div class="col-12 col-xl-6">
                                        <div class="sign__group">
                                            <select class="sign__selectjs" id="sign__quality">
                                                <option value="FullHD">FullHD</option>
                                                <option value="HD">HD</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12 col-xl-6">
                                        <div class="sign__group">
                                            <input type="text" class="sign__input" placeholder="Age">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="sign__group">
                                            <AdminSelect v-model="genre" id="sign__genre" />
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="sign__group">
                                            <input v-model="year" type="text" class="sign__input"
                                                placeholder="Premiere Year">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-xl-4">
                                <div class="sign__group">
                                    <select class="sign__selectjs" id="sign__director" multiple>
                                        <option value="Matt Jones">Matt Jones</option>
                                        <option value="Gene Graham">Gene Graham</option>
                                        <option value="Rosa Lee">Rosa Lee</option>
                                        <option value="Brian Cranston">Brian Cranston</option>
                                        <option value="Tess Harper">Tess Harper</option>
                                        <option value="Eliza Josceline">Eliza Josceline</option>
                                        <option value="Otto Bree">Otto Bree</option>
                                        <option value="Kathie Corl">Kathie Corl</option>
                                        <option value="Georgiana Patti">Georgiana Patti</option>
                                        <option value="Cong Duong">Cong Duong</option>
                                        <option value="Felix Autumn">Felix Autumn</option>
                                        <option value="Sophie Moore">Sophie Moore</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-xl-8">
                                <div class="sign__group">
                                    <select class="sign__selectjs" id="sign__actors" multiple>
                                        <option value="Matt Jones">Matt Jones</option>
                                        <option value="Gene Graham">Gene Graham</option>
                                        <option value="Rosa Lee">Rosa Lee</option>
                                        <option value="Brian Cranston">Brian Cranston</option>
                                        <option value="Tess Harper">Tess Harper</option>
                                        <option value="Eliza Josceline">Eliza Josceline</option>
                                        <option value="Otto Bree">Otto Bree</option>
                                        <option value="Kathie Corl">Kathie Corl</option>
                                        <option value="Georgiana Patti">Georgiana Patti</option>
                                        <option value="Cong Duong">Cong Duong</option>
                                        <option value="Felix Autumn">Felix Autumn</option>
                                        <option value="Sophie Moore">Sophie Moore</option>
                                    </select>
                                </div>
                            </div>

                            <!-- movie -->
                            <div class="col-12">
                                <div class="collapse show multi-collapse">
                                    <div class="sign__video">
                                        <label id="movie1" for="sign__video-upload">Upload video</label>
                                        <input data-name="#movie1" id="sign__video-upload" name="movie"
                                            class="sign__video-upload" type="file" accept="video/mp4,video/x-m4v,video/*">
                                    </div>
                                </div>
                            </div>
                            <!-- end movie -->

                            <div class="col-12">
                                <button @click="handleAddMovie" type="button"
                                    class="sign__btn sign__btn--small"><span>Publish</span></button>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- end form -->
            </div>
        </div>
    </main>
    <!-- end main content -->
</template>



<style lang="scss" scoped></style>