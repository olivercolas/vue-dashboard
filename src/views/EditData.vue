<template>
  <v-col style="margin:0;">
    <Title text="Edit data" />
    <v-data-table
      :headers="headers"
      :items="people"
      sort-by="name"
      class="elevation-1 data-table"
    >
      <template v-slot:item.location="{ item }">
        <span>{{ item.location.longitude }}, {{ item.location.latitude }}</span>
      </template>
      <template v-slot:item.preferences="{ item }">
        <v-chip class="chip" dark :color="getColor(item.preferences.pet)">
          {{ item.preferences.pet }}</v-chip
        >
        <v-chip class="chip" dark :color="getColor(item.preferences.fruit)">{{
          item.preferences.fruit
        }}</v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <v-btn fab fixed bottom right dark color="primary" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px" @click:outside="close()">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="editedItem.age"
                  label="Age"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="eyeColors"
                  label="Eye Color"
                  v-model="editedItem.eyeColor"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="genders"
                  label="Gender"
                  v-model="editedItem.gender"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.location.latitude"
                  label="Latitude"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.location.longitude"
                  label="Longtitude"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="pets"
                  label="Pet"
                  v-model="editedItem.preferences.pet"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="fruits"
                  label="Fruits"
                  v-model="editedItem.preferences.fruit"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import { Person, PetTypes, FruitTypes } from '../models/person';

@Component({
  components: { Title },
})
export default class EditData extends Vue {
  dialog = false;

  headers = [
    {
      text: 'Name',
      align: 'start',
      value: 'name',
      sortable: true,
    },
    { text: 'Age', sortable: true, value: 'age' },
    { text: 'Eye Color', value: 'eyeColor', sortable: true },
    { text: 'Gender', value: 'gender', sortable: true },
    { text: 'Location', value: 'location', sortable: false },
    { text: 'Preferences', value: 'preferences', sortable: false },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  editedIndex = -1;

  editedItem = {
    _id: '',
    age: 0,
    eyeColor: '',
    name: '',
    gender: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    preferences: {
      pet: '',
      fruit: '',
    },
  };

  defaultItem = {
    _id: '',
    age: 0,
    eyeColor: '',
    name: '',
    gender: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    preferences: {
      pet: '',
      fruit: '',
    },
  };

  eyeColors = ['brown', 'blue', 'green'];

  genders = ['male', 'female'];

  pets = ['cat', 'dog', 'none', 'bird'];

  fruits = ['banana', 'strawberry', 'mango', 'apple'];

  get people(): Person[] {
    return this.$store.state.people.list;
  }

  get formTitle() {
    return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
  }

  editItem(item: Person): void {
    this.editedIndex = this.people.findIndex((person) => person._id === item._id);
    this.editedItem = { ...item };
    this.dialog = true;
  }

  deleteItem = (item: Person): void => {
    const index = this.people.findIndex((person) => person._id === item._id);
    if (window.confirm('Are you sure you would like to delete this item?')) {
      this.$store.dispatch('people/deletePerson', index);
    }
  };

  initialize = () => {
    this.$store.dispatch('people/getPeople');
  };

  getColor = (preferences: PetTypes | FruitTypes) => {
    switch (preferences) {
      case 'cat':
        return 'purple lighten-1';
      case 'dog':
        return 'blue darken-2';
      case 'none':
        return 'grey lighten-1';
      case 'bird':
        return 'yellow darken-2';
      case 'apple':
        return 'green';
      case 'banana':
        return 'yellow darken-1';
      case 'strawberry':
        return 'red darken-2';
      case 'mango':
        return 'orange';
      default:
        return 'black';
    }
  };

  save(): void {
    if (
      this.editedItem.age
      && this.editedItem.eyeColor !== ''
      && this.editedItem.name !== ''
      && this.editedItem.gender !== ''
      && this.editedItem.preferences.pet !== ''
      && this.editedItem.preferences.fruit !== ''
    ) {
      if (this.editedIndex === -1) {
        // new item
        const id = Math.random()
          .toString(36)
          .substr(2, 9);
        this.editedItem._id = id;
        this.$store.dispatch('people/addPerson', this.editedItem);
      } else {
        // edit item
        this.$store.dispatch('people/editPerson', {
          person: this.editedItem,
          index: this.editedIndex,
        });
      }
    } else {
      alert('All fields are required');
    }
    this.close();
  }

  close(): void {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = { ...this.defaultItem };
      this.editedIndex = -1;
    });
  }
}
</script>

<style lang="scss" scoped>
.data-table {
  margin-bottom: 70px;
}
.chip {
  margin: 3px;
  height: 25px;
}
</style>
