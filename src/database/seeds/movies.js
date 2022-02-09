/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Titanic', release: '1998-01-16',
          description: 'Trata-se de um luxuoso e imponente navio, anunciado na época como inafundável, que parte para os Estados Unidos.'
        },
        { title: 'Branca de Neve e os Sete Anões' },
        {
          title: 'Matrix Revolutions',
          description: 'Após enfrentar os sentinelas no mundo real, Neo tem sua mente presa em um local que fica entre a Matrix e a realidade, do qual apenas poderá sair com a ajuda de Trainman'
        }
      ]);
    });
};
