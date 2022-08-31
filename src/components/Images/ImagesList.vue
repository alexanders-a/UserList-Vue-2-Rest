<template>
  <div class="carousel-center">
    <carousel
      class="carousel"
      :per-page="1"
      :pagination-enabled="true"
      :mouse-drag="true"
    >
      <slide v-for="image in images" v-bind:key="image.id">
        <div>
          <img class="img" :src="image.thumbnailUrl" :alt="image.id" />
          <!-- ! if Failed to load resource: the server responded with a status of 526 Failed to load resource: -->
          <!-- <img
            class="img"
            src="https://picsum.photos/200/300"
            :alt="test"
          /> -->
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from "vuex";
import "./imagesList.scss";

export default {
  methods: {
    ...mapActions({
      fetchAlbums: "album/fetchAlbums",
      fetchImages: "image/fetchImages",
    }),
  },
  computed: {
    ...mapState({
      images: (state) => state.image.images,
      albums: (state) => state.album.albums,
    }),
  },
  mounted() {
    this.fetchImages(this.$route.params.id, 5);
    this.fetchAlbums();
  },
  created() {
    const image = this.images.find(
      (image) => image.albumId == this.$route.params.id
    );
    if (image) {
      this.image = image;
    }
  },

  components: {
    Carousel,
    Slide,
  },
};
</script>
