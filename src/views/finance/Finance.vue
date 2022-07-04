<template>
  <v-sheet elevation="1" rounded :color="'var(--gold)'">
    <v-row no-gutters class="py-2 ml-2">
      <h1 class="primary--text">Financeiro</h1>
    </v-row>
    <v-card outlined class="outlined-primary">
      <v-card-title class="primary--text">
        <h3>Investimentos</h3>
      </v-card-title>
      <v-row class="mx-0">
        <v-col>
          <v-card>
            <v-card-title> Investimentos </v-card-title>
            <v-data-table
              :headers="investmentHeaders"
              :items="investments"
              show-select
              single-select
              v-model="selectedInvestment"
              item-key="id"
            ></v-data-table>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title> Aportes </v-card-title>
            <v-data-table
              :headers="contributionHeaders"
              :items="getContriutions"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  name: "Finance",
  data() {
    return {
      selectedInvestment: [],
      investmentHeaders: [
        {
          value: "id",
          hidden: true,
          width: 0,
          sortable: false
        },
        {
          text: "Investimento",
          align: "start",
          sortable: false,
          value: "name"
        },
        {
          text: "Data criação",
          align: "start",
          sortable: false,
          value: "createDate"
        },
        {
          text: "Data última Alteração",
          align: "start",
          sortable: false,
          value: "updateDate"
        },
        {
          text: "Rendimento calculado",
          align: "start",
          sortable: false,
          value: "calculatedPerformance"
        },
        {
          text: "Rendimento Esperado",
          align: "start",
          sortable: false,
          value: "expectedPerformance"
        },
        {
          text: "Ativo",
          align: "start",
          sortable: false,
          value: "active"
        }
      ],
      contributionHeaders: [
        {
          text: "Ordem",
          align: "start",
          sortable: false,
          value: "order"
        },
        {
          text: "Valor",
          align: "start",
          sortable: false,
          value: "value"
        },
        {
          text: "Data aporte",
          align: "start",
          sortable: false,
          value: "createDate"
        }
      ],
      investments: [
        {
          id: 1,
          name: "teste",
          createDate: "20/04/2022",
          updateDate: "21/04/2022",
          calculatedPerformance: "5.4%",
          expectedPerformance: "213%",
          active: "false"
        },
        {
          id: 2,
          name: "teste",
          createDate: "20/04/2022",
          updateDate: "21/04/2022",
          calculatedPerformance: "5.4%",
          expectedPerformance: "213%",
          active: "false"
        },
        {
          id: 3,
          name: "teste",
          createDate: "20/04/2022",
          updateDate: "21/04/2022",
          calculatedPerformance: "5.4%",
          expectedPerformance: "213%",
          active: "false"
        }
      ],
      contributions: []
    };
  },
  computed: {
    getContriutions() {
      if (this.selectedInvestment[0]?.id === 1) {
        return [
          {
            order: 1,
            value: 3900,
            createDate: "20/20/2000"
          }
        ];
      } else if (!!this.selectedInvestment[0]) {
        return [
          {
            order: 1,
            value: 412900,
            createDate: "20/20/2022"
          }
        ];
      }
    }
  }
};
</script>
<style scoped>
.outlined-primary {
  border: 2px solid var(--primary);
  background-color: var(--gold) !important;
  margin: 0 1rem;
}
</style>
