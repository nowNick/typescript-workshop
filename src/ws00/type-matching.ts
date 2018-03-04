interface UserResource {
  type: 'users'
  id: string,
  attributes: {
    email: string
    firstName?: string
    lastName?: string
  }
}

interface RoleResource {
  type: 'roles'
  id: string,
  attributes: {
    name: string
  }
}

interface PostResource {
  type: 'posts'
  id: string,
  attributes: {
    title: string
    content: string
  }
}

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
}

interface Role {
  id: string
  name: string
}

interface Post {
  id: string
  title: string
  content: string
}

type Resource = RoleResource | UserResource | PostResource

type DTO = User | Role | Post

interface JSONAPI {
  data: Resource | Resource[]
  included?: Resource[]
}

const apiResponse: JSONAPI = {
  data: [{
    type: 'users',
    id: 'u1',
    attributes: {
      email: 'example.com',
      firstName: 'John',
      lastName: 'Doe'
    }
  }],
  included: [{
    type: 'roles',
    id: 'r1',
    attributes: {
      name: 'admin'
    }
  }, {
    type: 'posts',
    id: 'p1',
    attributes: {
      title: 'hello',
      content: 'world'
    }
  }]
}

function deserialize (api: JSONAPI): DTO | DTO[] {
  if (???) {
    const included = (api.included || []).map(deserializeResource)
    const data = api.data.map(deserializeResource)
    return data.concat(included)
  } else {
    return deserializeResource(api.data as Resource)
  }
}

function deserializeResource (resource: Resource): DTO {
  switch (resource.type) {
    case 'users': {
      return {id, email, firstName, lastName}
    }
    case 'roles': {
      return {id, name}
    }
    case 'posts': {
      return {id, content, title}
    }
  }
}

console.log(deserialize(apiResponse))
