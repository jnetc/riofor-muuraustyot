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
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const query = gql`
  query MyQuery {
    _site {
      ...SiteFragment
    }
    home {
      ...HomeRecordFragment
    }
    project {
      ...ProjectRecordFragment
    }
    service {
      ...ServiceRecordFragment
    }
    about {
      ...AboutRecordFragment
    }
  }
  fragment SiteFragment on Site {
    globalSeo {
      fallbackSeo {
        description
        title
      }
    }
  }
  fragment HomeRecordFragment on HomeRecord {
    title
    description
    phone
    email
    address
    person
  }

  fragment ProjectRecordFragment on ProjectRecord {
    projects {
      id
      area
      address
      cloudLink
      completed
      contractor
      jobType
      geolocation
      projectDescription
      projectName
      projectNumber
      releaseDate
      projectImage {
        url
        blurUpThumb
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
      icon
    }
  }

  fragment AboutRecordFragment on AboutRecord {
    title
    description
  }
`;
