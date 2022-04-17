import { GraphQLClient, gql } from 'graphql-request';

interface Intro<T> {
  title: T;
  subtitle: T;
  id: T;
}
interface Navigation<T> {
  navigation: Array<{ link: T }>;
}
interface Data {
  intro: Intro<string>;
  nav: Navigation<string>;
}

export function request({
  query,
  variables,
  preview,
}: {
  query: string;
  variables: {};
  preview?: boolean;
}): Promise<Data> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const query = gql`
  query MyQuery($locale: SiteLocale) {
    home(locale: $locale) {
      ...HomeRecordFragment
    }
    project(locale: $locale) {
      ...ProjectRecordFragment
    }
    service(locale: $locale) {
      ...ServiceRecordFragment
    }
  }

  fragment HomeRecordFragment on HomeRecord {
    title
    phone
    email
    description
  }

  fragment ProjectRecordFragment on ProjectRecord {
    projects {
      area
      address
      cloudLink
      completed
      contractor
      googleMap
      id
      jobType
      projectDescription
      projectName
      projectNumber
      releaseDate
      projectImage {
        url
      }
    }
  }

  fragment ServiceRecordFragment on ServiceRecord {
    title
    description
    serviceCard {
      id
      cardTitle
      cardDescription
    }
  }
`;
