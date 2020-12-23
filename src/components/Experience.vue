<template>
  <v-main>
    <!--This appbar only shows when the viewport is MOBILE-->
    <v-app-bar elevate-on-scroll color="white" scroll-target="#thisisme" fixed v-if="$vuetify.breakpoint.mobile">
      <v-app-bar-nav-icon @click="mobileDrawer = !mobileDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-dialog v-model="mobileDrawer">
      <v-card flat>
        <v-card-title flat class="justify-center"><h4 class="modal-header">Check out some links below</h4></v-card-title>
        <v-card-subtitle class="modal-header-divider">. .   .    .</v-card-subtitle>
        <v-list>
          <div v-for="item in items">
            <v-list-item style="justify-content: center"><v-btn class="modal-button" text elevation="0" @click="openLink(item.link, item.isResume)">{{item.text}}</v-btn></v-list-item>
          </div>
        </v-list>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row>
        <!--This only shows when the viewport is DESKTOP-->
        <v-col
          md="3"
          lg="3"
          v-if="!$vuetify.breakpoint.mobile"
          class="navigation-menu">
          <v-navigation-drawer floating class="nav" width="370" fixed>
            <v-card elevation="0">
              <v-card-title class="justify-center" flat><h5 class="nav-header">Check out some links below</h5></v-card-title>
              <v-card-subtitle class="nav-header-divider">. .   .    .</v-card-subtitle>

              <v-list>
                <v-list-item class="navigation-list" v-for="item in items"><v-btn text elevation="0" @click="openLink(item.link, item.isResume)">{{item.text}}</v-btn></v-list-item>
              </v-list>
              <v-card-subtitle class="nav-header-divider-2">. .   .    .</v-card-subtitle>
              <v-list>
                <v-list-item class="justify-center">

                  <!--Fab links container-->
                  <div v-for="link in links" class="fab-links">
                    <v-btn outlined fab small :color="link.color" @click="openInNewTab(link.link)">
                      <v-icon>{{link.icon}}</v-icon>
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-card>
          </v-navigation-drawer>
        </v-col>
        <!--Main card that displays about me and stuff-->
        <v-col md="6">
          <v-card
            flat
            max-width="600"
            class="mx-auto main-card"
            id="thisisme">
            <v-img src="static/cntower.JPG" gradient="to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 255)"></v-img>
            <v-card-title class="main-card-text">Exhaustive list of work experience.</v-card-title>
            <v-card-text class="main-card-content-text">Below is a timeline of the work experience I have in the field of coding and software development so far. This timeline is still being updated.</v-card-text>
            <timelinedesktop v-if="!$vuetify.breakpoint.mobile"></timelinedesktop>
            <timelinemobile v-if="$vuetify.breakpoint.mobile"></timelinemobile>
          </v-card>
        </v-col>
        <!--&lt;!&ndash;V-timeline component&ndash;&gt;-->
        <!--<v-col md="3" v-if="!$vuetify.breakpoint.mobile" class="timeline-container">-->
        <!--<v-timeline dense class="timeline" dark>-->
        <!--<v-timeline-item color="white" light class="timeline-button-container" :small="!button.selected" v-for="button in timeline"><v-btn @click="selectTimelineContent">{{button.text}}</v-btn></v-timeline-item>-->
        <!--</v-timeline>-->
        <!--</v-col>-->
      </v-row>
    </v-container>
  </v-main>

</template>

<script>
  import AOS from "aos";
  import TimelineDesktop from './modular/timelineDesktop'
  import TimelineMobile from './modular/timelineMobile'
  import {routerPush} from './RouterPush'
  export default {
    name: "Main",
    components: {
      timelinedesktop: TimelineDesktop,
      timelinemobile: TimelineMobile,
    },
    created () {
      AOS.init();
      console.log(this.$vuetify.breakpoint.xs)
    },
    data () {
      return {
        items: [
          {text: "About me", link: "/", isResume: false},
          {text: "Experience", link: "/experience", isResume: false},
          {text: "Personal projects", link: "/projects", isResume: false},
          {text: "Blog posts", link: "/blog", isResume: false},
          {text: "Resume", link: "static/resume.pdf", isResume: true}
        ],
        // FAB links
        links: [
          {icon:"mdi-github", color: "black", link: "https://github.com/s7560m"},
          {icon: "mdi-linkedin", color: "black", link: "https://www.linkedin.com/in/hayden-hoffman-9427b0163/"},
          {icon: "mdi-instagram", color: "black", link: "https://instagram.com/_haydenhoffman"}
        ],
        isScrolled: false,

        // When true, mobile drawer is displayed. State only changes when app bar nav button is clicked.
        mobileDrawer: false,
      }
    },
    methods: {
      openInNewTab(link) {
        window.open(link);
      },
      openLink(link, isResume) {
        routerPush(link, isResume, this.$router);
      },
      selectTimelineContent(href) {

      }
    },
    updated () {
    },

  }
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
  /* Enable smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  /* STYLING FOR MAIN CARD COMPONENT */
  .main-card {
    padding-top: 20px;
  }
  .main-card-content-text {
    font-size: 18px;
    font-family: Montserrat, sans-serif;
  }
  .main-card-text {
    /*text-align: center;*/
    left: 10px;
    font-family: Montserrat, sans-serif;
    font-size: 26px;
    word-break: keep-all;
    padding-top: 70px;
  }
  .main-card-subtext {
    /*text-align: center;*/
    padding-top: 20px;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
  }
  .scroll-button-container {
    padding-top: 50px;
    text-align: center;
  }
  .navigation-list {
    justify-content: center;
  }

  /* Modal design components (MOBILE ONLY) */
  .modal-header {
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 18px;
  }
  .modal-header-divider {
    text-align: center;
    font-size: 18px;
    bottom: 20px;
  }
  .modal-button {
    justify-content: center;

  }

  /* Navigation design components (DESKTOP ONLY) */
  .nav-header {
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
  }
  .nav {
    justify-content: center;
    padding-left: 10px;
    padding-top: 20px;
  }
  .nav-header-divider {
    text-align: center;
    font-size: 18px;
    padding-top: 20px;
  }
  .nav-header-divider-2 {
    text-align: center;
    font-size: 18px;
    padding-top: 2px;
  }
  .fab-links {
    padding: 5px;
  }
  /* timeline styling */
  .timeline-button-container {
    padding-bottom: 100px;
  }
  .timeline {
    position: fixed;
  }
  .timeline-container {
    padding-top: 36px;
    padding-left: 50px;
  }

  /*timeline items under experience*/
  .timeline-item-text {
    font-family: MontSerrat, sans-serif;
    font-size: 20px;
  }
  .parallax {
    bottom: 100px;
  }
</style>
