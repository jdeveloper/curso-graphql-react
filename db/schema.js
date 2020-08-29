const { gql } = require('apollo-server');

// schema
const typeDefs = gql`

    type Curso {
        titulo: String
    }

    type Tecnologia {
        tecnologia: String
    }

    input CursoInput {
        tecnologia: String
    }

    type Query {
        obtenerCursos(input: CursoInput!): [Curso]
        obtenerTenologia: [Tecnologia]
    }
`;

module.exports = typeDefs;