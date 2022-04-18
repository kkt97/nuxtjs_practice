<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="name"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
          :search="search"
          :custom-filter="filterOnlyCapsText"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
        >
          <template v-slot:top>
            <v-row>
              <v-col cols="6">
                <v-row class="pa-6">
                  <v-text-field
                    v-model="search"
                    label="Search"
                    class="mx-4"
                    append-icon="mdi-magnify"
                  >
                  </v-text-field>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row class="pa-6">
                  <v-select
                    :items="Area"
                    v-model="areaFilterValue"
                    label="전국"
                  ></v-select>
                </v-row>
              </v-col>
            </v-row>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  상세검색
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="2">
                      <v-row class="pa-1">
                        <v-select
                          :items="Iron"
                          v-model="ironFilterValue"
                          label="Iron"
                        ></v-select>
                      </v-row>
                    </v-col>
                    <v-col cols="3">
                      <v-row class="pa-1">
                        <v-select
                          v-model="sortBy"
                          :items="keys"
                          prepend-inner-icon="mdi-magnify"
                          label="Sort by"
                        ></v-select>
                        <v-spacer></v-spacer>
                      </v-row>
                    </v-col>
                    <v-col cols="3">
                      <v-row class="pa-1">
                        <v-text-field
                          v-model="calories"
                          type="number"
                          label="Calories Less than"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                    ~
                    <v-col cols="3">
                      <v-row class="pa-1">
                        <v-text-field
                          v-model="calories2"
                          type="number"
                          label="Calories Less than"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
          ></v-pagination>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>



export default {
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      search: '',
      calories: '',
      calories2: '',
      enabled: null,
      areaFilterValue: null,
      ironFilterValue: null,
      caloriesFilterValue: null,
      sortDesc: false,
      sortBy: 'name',
      keys: [
        {text: "Calories 낮은 순", value: 'Calories'},
        {text: "Calories 높은 순", value: 'calories'},
        {text: "Dessert (a~Z)", value: 'Name'},
        {text: "Fat 낮은 순", value: 'Fat'},
        {text: "Carbs 낮은 순", value: 'Carbs'},
        {text: "Protein 낮은 순", value: 'Protein'},
        {text: "Iron 낮은 순", value: 'Iron'}, // 퍼센트는 다르게
      ],
      Area: [
        {text: "전국", value: null},
        {text: "부산", value: '부산'},
        {text: "경기", value: '경기'},
        {text: "제주", value: '제주'},
      ],

      Iron: [
        {text: "ALL", value: null},
        {text: "0%", value: '0%'},
        {text: "1%", value: '1%'},
        {text: "2%", value: '2%'},
        {text: "6%", value: '6%'},
        {text: "7%", value: '7%'},
        {text: "8%", value: '8%'},
        {text: "16%", value: '16%'},
        {text: "22%", value: '22%'},
        {text: "45%", value: '45%'},
      ],

      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          area: '부산'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          area: '부산'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          area: '부산'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          area: '경기'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          area: '경기'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          area: '경기'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          area: '경기'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          area: '제주'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          area: '제주'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          area: '제주'
        },
      ],
    }
  },
  computed: {
    headers () {
      return [
        {
          text: 'Area',
          value: 'area',
          align: " d-none",
          filter: this.areaFilter,
        },
        {
          text: 'Calories',
          value: 'calories',
          filter: this.caloriesFilter,
        },
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron', filter: this.ironFilter},
      ]
    },
  },
  methods: {
    filterOnlyCapsText (value, search, item) {
      const inName = RegExp(search, 'i').test(item.name)
      const inIron =  RegExp(search, 'i').test(item.iron)
      return inName || inIron
    },
    areaFilter(value) {
      if (!this.areaFilterValue) {
        return true;
      }
      return value === this.areaFilterValue;
    },
    ironFilter(value) {
      if (!this.ironFilterValue) {
        return true;
      }
      return value === this.ironFilterValue;
    },
    caloriesFilter(value) {
      const kcal = value > parseInt(this.calories)
      const kcal2 = value < parseInt(this.calories2)
      const kcal3 = value
      if (!this.calories && !this.calories2) {
        return kcal3
      } else if (!this.calories) {
        return kcal2
      } else if (!this.calories2) {
        return kcal
      } else {
        return kcal && kcal2
      }
    },
  }
}
</script>

<style scoped>
</style>
