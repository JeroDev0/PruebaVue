<template>
    <div class="tabla-equipos">
      <h1>Lista de Equipos</h1>
      <h2>Todos los equipos se encuentran disponibles</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ASCI</th>
            <th>ALGORITMO</th>
            <th>POTENCIA</th>
            <th>CONSUMO/E</th>
            <th>GANANCIA</th>
            <th>PRECIO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in planes" :key="equipo.id">
            <td>
              <input
                type="checkbox"
                v-model="selectedEquipos"
                :value="equipo.id"
              />
            </td>
            <td>
              <div class="equipo-info">
                <img :src="equipo.urlasci" :alt="equipo.nombre" class="equipo-imagen" />
                <div>
                  <h3>{{ equipo.nombre }}</h3>
                  <p>{{ equipo.descripcion }}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="algoritmo-info">
                <p>{{ equipo.tipoCripto }}</p>
                <img :src="equipo.iconurl" alt="icono" class="icono" />
              </div>
            </td>
            <td>{{ equipo.cantidadTh }} TH/s</td>
            <td>{{ equipo.kwbase }} Kw/h</td>
            <td>
              <p>Diario: {{ equipo.dailyIncome }}</p>
              <p>Mensual: {{ equipo.monthlyIncome }}</p>
              <p>Anual: {{ equipo.annualIncome }}</p>
            </td>
            <td>{{ equipo.precioContratacion }} {{ equipo.moneda }}</td>
            <td>
              <button class="btn-solicitar">Solicitar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Planes',
    setup() {
      const planes = ref([]);
      const selectedEquipos = ref([]);
      const loading = ref(true);
  
      const fetchPlanes = async () => {
        loading.value = true;
        try {
          const response = await fetch('https://inv-superlink.online/api/PlanesMongoDB/listar-planes');
          const data = await response.json();
          planes.value = data;
          loading.value = false;
        } catch (error) {
          console.error('Error al obtener los planes:', error);
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchPlanes();
        const interval = setInterval(fetchPlanes, 30000);
        return () => clearInterval(interval);
      });
  
      return { planes, selectedEquipos, loading };
    },
  };
  </script>
  
  <style scoped>
  .tabla-equipos {
    background-color: #121212;
    padding: 20px;
    border-radius: 8px;
    color: white;
  }
  
  .tabla-equipos h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .tabla-equipos h2 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #1d1d1d;
  }
  
  th, td {
    padding: 10px 15px;
    text-align: left;
    border-bottom: 1px solid #333;
  }
  
  th {
    font-weight: bold;
  }
  
  tbody tr:hover {
    background-color: #2b2b2b;
  }
  
  .equipo-imagen {
    width: 80px;
    height: auto;
    margin-right: 10px;
    vertical-align: middle;
  }
  
  .icono {
    width: 40px;
    height: auto;
  }
  
  td {
    vertical-align: middle;
  }
  
  .btn-solicitar {
    background-color: #3f88f7;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-solicitar:hover {
    background-color: #357dd7;
  }
  
  a {
    color: #3f88f7;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  