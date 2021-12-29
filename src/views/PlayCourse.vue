<template>
  <div>
    <v-row no-gutters>
      <v-col cols="2">
        <v-navigation-drawer
          dark
          v-model="navdraw"
          class="primary"
          height="100%"
          style="border: 10px solid red"
        >
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Daftar Modul
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
              mandatory
              :active-class="
                this.$vuetify.theme.dark ? `bordered-dark` : `bordered-light`
              "
            >
              <router-link
                :to="{ name: menu.page }"
                v-for="menu in menulist"
                :key="menu.name"
                style="text-decoration: none;"
              >
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item link v-bind="attrs" v-on="on">
                      <v-list-item-icon class="text-center">
                        <v-icon class="white--text" dark v-text="menu.icon" />
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          class="white--text"
                          v-text="menu.name"
                        />
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                  <span v-text="menu.name" />
                </v-tooltip>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10" class="pa-8">
        <iframe
          width="100%"
          height="500px"
          :src="'https://www.youtube.com/embed/' + ytId"
        >
        </iframe>
        <h2>Apa itu HTML?</h2>
        <span class="subtitle-1">
          Berbicara soal HTML tidak hanya terbatas pada pengertiannya saja. Anda
          harus tahu seluk-beluknya jika ingin mahir bahasa markup yang satu
          ini. HTML adalah singkatan dari Hypertext Markup Language. HTML
          memungkinkan seorang user untuk membuat dan menyusun bagian paragraf,
          heading, link atau tautan, dan blockquote untuk halaman web dan
          aplikasi. HTML bukanlah bahasa pemrograman, dan itu berarti HTML tidak
          punya kemampuan untuk membuat fungsionalitas yang dinamis. Sebagai
          gantinya, HTML memungkinkan user untuk mengorganisir dan memformat
          dokumen, sama seperti Microsoft Word. Ketika bekerja dengan HTML, Anda
          menggunakan struktur kode yang sederhana (tag dan attribute) untuk
          mark up halaman website. Misalnya, Anda membuat sebuah paragraf dengan
          menempatkan enclosed text di antara tag pembuka
          <p>dan tag penutup</p>

          Berbicara soal HTML tidak hanya terbatas pada pengertiannya saja. Anda
          harus tahu seluk-beluknya jika ingin mahir bahasa markup yang satu
          ini. HTML adalah singkatan dari Hypertext Markup Language. HTML
          memungkinkan seorang user untuk membuat dan menyusun bagian paragraf,
          heading, link atau tautan, dan blockquote untuk halaman web dan
          aplikasi. HTML bukanlah bahasa pemrograman, dan itu berarti HTML tidak
          punya kemampuan untuk membuat fungsionalitas yang dinamis. Sebagai
          gantinya, HTML memungkinkan user untuk mengorganisir dan memformat
          dokumen, sama seperti Microsoft Word. Ketika bekerja dengan HTML, Anda
          menggunakan struktur kode yang sederhana (tag dan attribute) untuk
          mark up halaman website. Misalnya, Anda membuat sebuah paragraf dengan
          menempatkan enclosed text di antara tag pembuka
          <p>dan tag penutup</p>
          .
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PlayCourse",
  mounted() {
    console.log("test id ", this.$route.params.id);
    // this.course_id = this.$route.params.id;
    // console.log("images ", this.courseList[course_id].image);
  },
  methods: {
    setYtID(id) {
      this.ytId = id.id;
      return id.icon;
    },
  },
  watch: {
    selectedItem(val) {
      switch (val) {
        case 0:
          this.ytId = "0kDQJODaNpY";
          break;
        case 1:
          this.ytId = "ZtyMdRzvi0w";
          break;
        case 2:
          this.ytId = "5JwWqjd4e9o";
          break;
        case 3:
          this.ytId = "yQimoqo0-7g";
          break;
        case 4:
          this.ytId = "gAvCczHLc3M";
          break;

        default:
          break;
      }
    },
  },
  data: () => ({
    ytId: "0kDQJODaNpY",
    selectedItem: 0,
    windowFullscreen: false,
    widgetLoading: false,
    isStatic: true,
    navdraw: true,
    menulist: [
      {
        name: "Pengantar HTML",
        page: "PlayCourse",
        icon: "mdi-check-bold",
        id: "0kDQJODaNpY",
      },
      {
        name: "Tools",
        page: "PlayCourse",
        icon: "mdi-check-bold",
        id: "ZtyMdRzvi0w",
      },
      {
        name: "Membangun Project HTML",
        page: "PlayCourse",
        icon: "mdi-check-bold",
        id: "5JwWqjd4e9o",
      },
      {
        name: "Submission 1",
        page: "PlayCourse",
        icon: "mdi-check-bold",
        id: "yQimoqo0-7g",
      },
      {
        name: "Penutupan",
        page: "PlayCourse",
        icon: "mdi-check-bold",
        id: "gAvCczHLc3M",
      },
    ],
    mini: true,

    course_id: "",
    courseList: [
      {
        id: 1,
        title: "Belajar HTML Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "https://lh5.googleusercontent.com/7T0zO-ZTILZSxNOkiNtHPmPDHgPZKcovw3LWRbuN5h6_aOkzS9fQF0Q8zLu2pgw4TSIEH0Eb4_S8We-pK7Lhfn0s534T-Nt4BDQQ4ZqV7n1jej-pt0m6rB6rUA5eIi9lm1f-n7U",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 2,
        title: "Belajar Javascript Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "https://www.yudana.id/wp-content/uploads/2018/04/javascript.jpg",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 3,
        title: "Belajar CSS Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "data:image/png;base64,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",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 4,
        title: "Belajar PHP Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAABNVBMVEVPW5P/////VZnB2Vxodomtw2e91F5GU4//AGVHW5NCW5ObWZXTV5dDWY5IW49NWZLhVf+VWMZGUZZHVZarV9hHWZWiqMP/m1JPV4xVnP9BVJiddXvMhmpRcbjMqj7/zwCdi2I3TZhUiuXrDGsn2v9xTYxQVJLx8fre0io0ueZEjp02zKxAo6NAToxJcadsdaUuyfXd3u2koGJEhrhyd4HJwEPKy9+Ij7W3u9FYWJrQK/x0fKfR/wCGo2Gmzj9ga51xcK9bYp2cosBpU46vtMwl3v+FfMCTcn+FbYPvk1y9gHCneXd5iYKpvmhWYpCAkX93WbBtWqhLcphJfZqPlbdAlMSno2CYlm3m2R29t0ezrlPvVpjDWJY9odB4kW5aaoqtOt6HfXOwmFLctC1wb4CbitR/eLohP1NjAAAGCElEQVR4nO3c/WPaRBgH8KDVk+n6uCGouOmmk8xphuwFmKhNOhrf6nxjtfN9Ovj//wTzcpfkLrmS0K7h4Pv5YW05juae3usTmGUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAumhrUd2Xtsa+ekfna4RNp/nNmzpX2nVf3NpC1FZB317R+Q5R0wrn/e71QpfL2NrJjx2+tLLvH21r2NgPL768sm2O2sq2N2r0aGd1dV98fZoXS6PlBwiKVbqCt3TOqIXPQfPHN0rrLX01svYiVcLmva+zvmHbvfR6aQ+WvhrrNEI2qxC2q2/rbEvUnGEUtaFT4QpMjJr106XSlncgx46i1mEVLqB9VWf1Rj1/u6UtfSnai4LWGJ1qR9KTbfzuhiZx1CqtBrkXuSX7edPDxvb5YnCK1yD6WHZr+dJttlUWg5zNjBoxSXb8sEEUtX2HF0ll2lrq638i+2UTRihZnaz9CTlps+JpbRyXzCYsUyTVkosUxqwGTZ38U8WMnxqMeAROKhrliianGsf1az78QCc/p/Dtv2QYj8XCIisuGmtrmar58BWdfNT4jK90nKhLFRYNowXVGRQWmRy2alGzC9ofnwaKi6LNm1NU0tg/zRalfh/q5DsDixtsR9IAhE+kbFFSFh4UxKFBrWXu1Kbkw+TVIJcsEzO+5TgOo72RmK9mLCmicM9B1shOOxSb8aKwlpXWmpg6RJu3ZUG/6MuklokZP+4lRE58HGiMWZomCv8QFjmzTNSmvIh4rfjnxtTQIUqPD25kHQSNtyXyMOIz/kA8SHyPFpwHlJOB6Hphf+KLwTBXy9io3ZDlombLUbNF1+L1yRZhVNJEYosWrgakZpCchhxGw9DdT2XBEXwgy7YsnwviARk6okjMVWLAhqO1z2vlomZoX7NIOcAEzXVk0rN5B0omOzHWxkxNE4mxzORuJ9UydV7LEudyy2q3ZMlTRAdK6/Bu1GFKmoiYnQRGLAbJH0BE2PANW4hG0xhr3zu6k3WUjixlMUjW1OAQrywGmbGsLgYijFL6ksx83yGbium/9evxzaxj0dmyHSgmjkrBxqN4MQjGMrHcYmArnS94/s49yTNDwlYmarwDzZjyQNiN5HUiWQzSWSxZQsQAHWcGaPeJ9DuP718+p2afUjBCw9xXNELvyJIgTZTFQBzY+5QcGuSScCyLbpcETXTQ7ADtPpH+UDdNiVqJ1UDMYsken58MgtiIviWmNe1iQMzppB000Tq6L/mtZW0K0YGus3B7Yo1Eaijoe+piwEflLLsYxLVmopZ8K6vVlWxO0MQsPhiPx8NBmrsINxDqySCze+NbWrXWzPxtRynEGkXGYf/iaaLkZMD3Fk66Yiimca/UJt/LpuTXXv7GQBw0ymSQuOxiMDspaK9WU1vbV1d0Y6Axi7LfaZoo5uQWA5m4DXPhhUp+N7Cz5W8M2FOLZYtOOBkU1dqOqKWLQWC6P9pjovWsEz0mNrLUj5+zZyVZkaJaQdReq+QP86KWdCBH3EHPpMeVe+oktn5JrUlaK/uiF6o5v9aelVzC5yxq5e+0K4kqQ86jWpmjZZVaappI0vtI9pjYUDYzPGy5NFG5WmqaSNJTEvB/9piSgK/0xstz11724ah8mqiMfJpIokTtwLCotQ+/jO3owpakiapNa/xAqrn1SXdlt4lGsv46j9DWX5/HDnV/29XePyoWA91HJ0lIPplBikrNOGfLoybfQC6Lv5tIsxikHmRU+gW1op0vYn/rR+gkVHHEUL9Urd1/PkuZFDaegdQ3b7URU66WYVFrdzXONy1oVtTaT9/V+Pd8w9YzaV5rXXtP479u3de2vhC1VdCzaxpP8Z9T6FFLA0EDAAAAAAAAAAAAAAAAAAAAAAAAAIAtxT9A4nn8q7XWn9yqn+tarue7nht953ue61nu3HLDIi961PXqvsa14/qB+cJz527wrz/33eARbz73/YuLIJoLdz53fXQ8RRCjhe8GwfHdMGDBl4Xvhz95bhy1hW8haip34VEwBMOx6EXzWvBN+EAwOikaoeFDdV8kAAAAAAAAmO1/s+CFJzJJKXEAAAAASUVORK5CYII=",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 5,
        title: "Belajar Java Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdHoO5Ucn9pW0nfMU0b9Z4PyVoZo9Avum1A&usqp=CAU",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 6,
        title: "Belajar C++ Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAqFBMVEU3Y5kaTYllmtJ7pNP///8ARIIAWZx+p9YyX5YXS4g5ZZowXZQoV5AgUYwAQoFfk8tPeaxym8tYk89IcqZnkMEAUplslcVbhLZtn9QAPn8AOXxYisEAR5QAM3pQgLfr8fjc5vNnjbinw+M2dbIALniVt94jaKi6yt3Q2OPN3O/C1ezBy9l/n8OSpL5NbpuKpsept8uJsNsgXZuXsc1viKtgfKMAJXJ/lLMTv5+LAAAMrklEQVR4nOWdaXvaOhCFIQSQxZIGkoYsZGmWpk2a7vf+/392ZVbLljRntNiQe/qlTxLAepkZjaSR1GoHKVP/hsNBazclB1lY80pqBbxWPcnOclopLq0QWDkp2TQOQlFp+cLKRjtuU2vFpOUHKxuJnbeptSLS8oGVo9ojxaPlA2tPHHCjYWOwsuHeOOBaMhYtNqx9M6uFGoGVtZtutqeagDVqutGeksIU5NmBnwVrX1m1jEFedekjHi8GrGyPWbVkhcsi/WGxYllW0w0OU/mrX/Tpo1Swmm5tmCphS+S0WKxwWNle5gxFlcLWSOWLzAQMhjVsuq3hKvvciNsfOmCpEaAo/OH+S9jbGgxLmalc/zrbq6GzTaHDHgesPADKFat34IS5eJ0fB9bi7Yv/338FOqIrZikvXH0V78SwQh3RAStrb6y26TbGUypYW70bw1KOGDJtCsFquoUxFeKIAKz30hWulBbWfk6OWhWwfoHAarp5cSX9ky0A1vvywpAYT8N6HyOdorxjPGBZTbctvpLBemd94UKDVLDag31bU6XlG+Npy2q6ZSnkGeNpy2q6YUk09KJFwXqPISuXDyvast5X+r6RV/rwf4XlZVqkGzbdqFTySR9Iwk03KpkSwNrn+ga3PNIHAlYTnaGQ06kUyUek1VKRUFj1TzmI6dGB0tE0OS2+adUDSwjQUoS8PFjpSKK44HcviZ2ZUrCijAzF2fHxR6DtorVBlesSxHXS6ZzAZItisiJhxXAGedzvdPp90rHE9UFJ14DJyA727gZxM9P0sITsLNV3G+kqWJVEEz5evbsPrXhVNLnCc9INq07/zNGcQrDSRYWuab/jTytufVYwrC2rTv/E2hpR9cBC6Gq5IJ/1OwG0osIKTeALrByWJT7YUVGha2NZ6gM+sGnxBj1pYRVZdTqWppiDFRq61jHLk9buwNJYWbzEGqzQ0CX7AbQky7RSwtJZGdvhDFa6bKFLTENosUwrISyE1RRFlcsSuoJosUwrXW9IsxKSDla6LJ4cZFu7AEtQsQQMVrrMoSuEFse0UmXwFCtGsNJlDF3kN+NS47BIVs5gNZlMHL+9jkuLYVrkrIMfK7df2IOVwtR//KT02D+wEjPNdYXYFrw+nWSKxs2qNBFTJPXz683hRjdfH228DJM3/rRw00ox+Uewsnjg5ODrYUVfZxZcVV8MsK0GYXmxOjKhyvXFgstEi8pVbEInH+IvWFDxymxWj2ZUuT4ZaV3GjFvgvFb0pTCKlXGCYXJrZ6WCl8EQn05/GT7b17ZA04q9Ik3lh8IU3Gc3LlZK/VLved9TMnQ93rQw04oMi8ylhSFpmBGolH4WXfG617PA8qaFLfSQPQErY6HHHQZYACtlW9tg9atnh+VLC1tDjFpFo7MyjnqrsCaUDy412wSrnguWLy0oMY1ZzAawqsJyx/atbiabYOWE5UkLSkxJy8K7Q4RVBdbkE8ZK5aeT2XWvR8OC5merigILnv6DWFUty2hFRs887vUgWH60kBBPwwK/GYxVGdbkSxnJ7WM+mp4cPJZ+c3N3isLyooX4IQ0LC1ogqzKsck94ux3cTGZFXL+vyqwcsPI1fTatGLCwCC8+YKxKsCalAaE+stmOgT73KqjcsDxoAVl8nL07MKsyLJ3VY2kUOOkvzW16VUVFwOLTAlKtKLvCcFYlWI8Ou1rQ+pkHKyMqClZLHjNpRbEs0g8ZrHRYeni/NcwuTL7+PjV4IAKLTYvuDwFYVKbFYVWCpaUIsyqrg2srKhoWlxbdHyIbyiOy0mHN3IY1O3raojndYlv9j57wZsatGLDc8/A8Vjqsn1p0r5jVfcGqrpQRLmPX6efDwykGi0mLHB8GH1UgWax0WNpQp4JK87mr2zWsKwXrPjcuZCmFRYtMHkIPwRDMKFqEpWVZN7oXXmqoPtzdKcs6uzs7fbq7ez48fL1T+Ty07qTTIp4tCiyHHxYTd6RiGIM1edJY5Z630PPV3frvrzBYLaiabqUYsBx+WIxYJ8jUFwSrNe5Fg1Ws06wDlqs/LISsPkILgHU/HnfHmUbr7PurcsPX73en999flRv+/v4KuqFofcRhUZkWtsDoMK0THi0Nlhbgl7Bm19l5dyHdthYBPg/rp6wAL6adbYHuRypMUBEeg+XIS8Uxi5bWG2qjnUXqcDRcoSrj8ksdCrXMnf4x9XDkOj4GyzU+5NGyJ6VflGnJ8/GWle6LT0/roP90fw8mpToroKuOA8uVarFo6cOdIqzDWR6sSspChjtcVuTyIVgU4RzycGg5BtIv/1RYdeffvldn/UBYfFZkgS0Gyz31wKDlmqL5c1Fmdf6muskzvykaD1axYLmnAHFapWllDdbhW4nWxXCZXf0yGhexb8qDVTRY7lktmFZpprS0KvHnoeiJ87f1z42TWk5YXqyiwSJmlzVajoSmZFkdHdbhS3e+6hDP5xc/Cr94rfqiC9bAi1U8WMSEKUirvBRWWY/+/DZ/mM8fHt5+6D+//YAvhfmyigeLWrjAaJUXWadlWEo3z8+mVVYJw/JlFSl1yEXNxUO09KT0WuUGBixGvcy7GQbLm1WcpHQhcpkHoVWANbtsq7HNA1oYclEeAdlg6axwVLGGO0uRNSIArS2sI7EI5eMxBkssBo3jLgnLm1WsgfRSGVkULz5StDaw7tfDwHOBsPq7TsG2A0bzwwSwIifhmVs5KZG0lrBUsNomVBdvNKs/80L+1XbAGhSmjDpMVmRlKQ8WXfdA0coLcGeXo8JEjKIlqOK/v6XU3gorhBW904J5sRowzeGmlW8Ga52XRszn42cXqpthedCY+6KhtDvMrugzJpmb9YE6QIKWvC+jyhv/jyOD+PFQfYHCFZsVUBnCPY8FKEDSaFXTnKGh6coVRy9mVM9ibnrB2PAgYazi1DpoQk5adtOSZlrjh+HnKqoXaTIrlW8MqxErkFWUkqOSkILcgdu2RNuMa37x56W4he7l33OjVSkfNCQxgayQ4m7+0XdIJSDhiXLQNULons8fsr//fvvx49u3v6OHeWUycKWhdLPi5le5kO07fFiZQJZV3LSUL1o4dMfnFwsZuoHVHxi/rVBW0P0DXocqIh9+Qg1mR9XlCUBj86cHspLY7UUesLIRsrxJ0pIiY9MyBqtwVuheVq+TYKECZtq2rKHLKlOwCmclUQhesKCwBdByhC6TWdm+I+CDnIJvEPO8ogB6CKgRaOgat23fUG2sPGGBF/9qzfhoXvPBQte4a50eEmGsJOMATt/LLwwZNEXLVvCDhC77x/mteW3FOazUFxa4D1GjZedrHgFtzMppx0GseBceel+rAt7+W6DlrCWzhy57sFq0tnBAIp8V8wzcgHvGsEcr0LKfJpn7ojl0OYLVQltYfFaCe0lK0KVskDa03FWKUqURBlxkbFwXtfJZ8S/9CIEF7gjeLCHQj6/TGruD1VKrFSUuK97JiBFgobTE9Ljf7x8j/Wdx8maM5b5qzK7kcnHTi/iHwYfCAhOIvAL8DNsGvw1dVLAqvPn07Ix5aLfftTuBsGBaLfTE9kXoUupyTgxiHgef8ha6lbLMcFV8imsb5EAp/tuu3tz7VjUGrKH68oTBesF0i9miZHe5yUHIJeXYDot1JDckvElopZJfXOfB2mZUhiWQ/aEViArdFbb9QJMn+p5lWq9MQSQFrOJHGn69F7SGWTArCJaWexr/YudpDQ09eVOwdpxWyBXuXFjaiNnyDe0sLUmhYrgntJO1QML6ybtKy5mDKk6jIW53kGUVFgrtf7STtNzZQjZcPTSY1YM7WZe0ZMv12TtIy5ktZMUnhvIKcLgzWsyWDNx9ym7RkmQX2CqMqqBFHnwgPSJHVbuVb9GnNGiScc7PwrVLtEhLqYzS6CF2VFi7M04kAkbbMMsLTDTHhbUjtJBlG8NEHPmayLB2ghbUsxkiRuzSblrN08Km9wwvJCFHh9UwLXiJy/DaOEdC8ZTBqxjR5c6a9YZX1YBlNUlL4DMxBvuvP2blaoiWhEqO149YfX30HRboozRBizVvXN37Q6fwaWAxVl9jCa6i3Txh+R3ol6SCVTstXllau9prJ9mOgirBWrVDjHC1UYGWpDcbtlPCqpMWp4p2q22Ql1g3mhAW/4Ijb3kvCQ5z6xIDMDtLCas2Wv71C6ZiF7uSwqqJVkitB0tpYdVCK8r6KaTEsNrQDrIAsdOrECX/rMS02OlViNJ/MUlp1cqqBlhZ0JXwbgWUPPqoBpdPRwu7Oy6e6oiP4IY7tnyGOEGqpTNJY1u1s6oHVhu/nm2XWdUGSyss2FNW9cGKXDYSXk3roRoT4Ji0mrCrWmGxrnd1qxG7arf/A4sJF7crMqW6AAAAAElFTkSuQmCC",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 7,
        title: "Belajar C# Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "data:image/png;base64,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",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 8,
        title:
          "Membuat Aplikasi Android Pemula Menggunakan Android Studio Java",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "https://1.bp.blogspot.com/-km-9gFdULoE/X8Kln4LE_iI/AAAAAAAADws/CFJdrupFnLYZIOo9GXkzLDMpCQ9siQehACLcBGAsYHQ/s448/Spesifikasi%2BMinimum%2BLaptop-PC%2BUntuk%2BAndroid%2BStudio%2BTerbaru.jpg",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 9,
        title: "Belajar Vue js Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image: "https://yukcoding.id/wp-content/uploads/2020/09/Vuejs.jpg",
        desc: "lorem ipsum",
        price: "Free",
      },
      {
        id: 10,
        title: "Belajar Kotlin Dasar",
        sub_title:
          "Belajar dasar dasar dari html atau hyper text markup language",
        image:
          "data:image/png;base64,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",
        desc: "lorem ipsum",
        price: "Free",
      },
    ],
    headers: [
      { text: "Materi", value: "materi" },
      { text: "Waktu Belajar", value: "waktu" },
      { text: "Mentor", value: "mentor" },
    ],
    courses: [
      {
        materi: "Pengantar HTML",
        waktu: "10 Menit",
        mentor: "Nur Hidayah",
      },
      {
        materi: "Tools",
        waktu: "5 Menit",
        mentor: "Nur Hidayah",
      },
      {
        materi: "Membangun Project HTML",
        waktu: "60 Menit",
        mentor: "Nur Hidayah",
      },
      {
        materi: "Submission 1",
        waktu: "Sampai Batas Waktu Kelas",
        mentor: "Rifqi Fathurrahman",
      },
      {
        materi: "Penutupan",
        waktu: "-",
        mentor: "Rifqi Fathurrahman",
      },
    ],
  }),
};
</script>
<style>
.bordered-light {
  /* border-left: 4px solid #fff !important; */
  background: url("~@/assets/line.svg") center left no-repeat;
  z-index: inherit;
}
.bordered-dark {
  background: url("~@/assets/line.svg") center left no-repeat;
}
</style>
