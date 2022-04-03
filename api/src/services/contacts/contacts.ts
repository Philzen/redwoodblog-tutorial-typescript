import { validate } from '@redwoodjs/api'
import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }: Prisma.ContactWhereUniqueInput) => {
  return db.contact.findUnique({
    where: { id },
  })
}

interface CreateContactArgs {
  input: Prisma.ContactCreateInput
}

export const createContact = ({ input }: CreateContactArgs) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({ data: input })
}
