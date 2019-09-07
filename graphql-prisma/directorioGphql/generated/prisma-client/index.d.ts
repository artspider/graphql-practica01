// Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  categoria: (where?: CategoriaWhereInput) => Promise<boolean>;
  empresa: (where?: EmpresaWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  categoria: (where: CategoriaWhereUniqueInput) => CategoriaNullablePromise;
  categorias: (args?: {
    where?: CategoriaWhereInput;
    orderBy?: CategoriaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Categoria>;
  categoriasConnection: (args?: {
    where?: CategoriaWhereInput;
    orderBy?: CategoriaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CategoriaConnectionPromise;
  empresa: (where: EmpresaWhereUniqueInput) => EmpresaNullablePromise;
  empresas: (args?: {
    where?: EmpresaWhereInput;
    orderBy?: EmpresaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Empresa>;
  empresasConnection: (args?: {
    where?: EmpresaWhereInput;
    orderBy?: EmpresaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EmpresaConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCategoria: (data: CategoriaCreateInput) => CategoriaPromise;
  updateCategoria: (args: {
    data: CategoriaUpdateInput;
    where: CategoriaWhereUniqueInput;
  }) => CategoriaPromise;
  updateManyCategorias: (args: {
    data: CategoriaUpdateManyMutationInput;
    where?: CategoriaWhereInput;
  }) => BatchPayloadPromise;
  upsertCategoria: (args: {
    where: CategoriaWhereUniqueInput;
    create: CategoriaCreateInput;
    update: CategoriaUpdateInput;
  }) => CategoriaPromise;
  deleteCategoria: (where: CategoriaWhereUniqueInput) => CategoriaPromise;
  deleteManyCategorias: (where?: CategoriaWhereInput) => BatchPayloadPromise;
  createEmpresa: (data: EmpresaCreateInput) => EmpresaPromise;
  updateEmpresa: (args: {
    data: EmpresaUpdateInput;
    where: EmpresaWhereUniqueInput;
  }) => EmpresaPromise;
  updateManyEmpresas: (args: {
    data: EmpresaUpdateManyMutationInput;
    where?: EmpresaWhereInput;
  }) => BatchPayloadPromise;
  upsertEmpresa: (args: {
    where: EmpresaWhereUniqueInput;
    create: EmpresaCreateInput;
    update: EmpresaUpdateInput;
  }) => EmpresaPromise;
  deleteEmpresa: (where: EmpresaWhereUniqueInput) => EmpresaPromise;
  deleteManyEmpresas: (where?: EmpresaWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  categoria: (
    where?: CategoriaSubscriptionWhereInput
  ) => CategoriaSubscriptionPayloadSubscription;
  empresa: (
    where?: EmpresaSubscriptionWhereInput
  ) => EmpresaSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CategoriaOrderByInput =
  | "_id_ASC"
  | "_id_DESC"
  | "nombre_ASC"
  | "nombre_DESC"
  | "descripcion_ASC"
  | "descripcion_DESC";

export type EmpresaOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nombre_ASC"
  | "nombre_DESC"
  | "descripcion_ASC"
  | "descripcion_DESC"
  | "horarios_ASC"
  | "horarios_DESC"
  | "tel_ASC"
  | "tel_DESC"
  | "imagen_ASC"
  | "imagen_DESC"
  | "rangoDePrecios_ASC"
  | "rangoDePrecios_DESC"
  | "ranking_ASC"
  | "ranking_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CategoriaCreatetagsInput {
  set?: Maybe<String[] | String>;
}

export type CategoriaWhereUniqueInput = AtLeastOne<{
  _id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EmpresaCreateInput {
  id?: Maybe<ID_Input>;
  nombre: String;
  descripcion?: Maybe<String>;
  direccion?: Maybe<DireccionCreateOneInput>;
  horarios: String;
  categoria: CategoriaCreateOneInput;
  tel: String;
  imagen?: Maybe<String>;
  rangoDePrecios?: Maybe<String>;
  ranking?: Maybe<Int>;
}

export interface CategoriaUpdateOneRequiredInput {
  create?: Maybe<CategoriaCreateInput>;
  update?: Maybe<CategoriaUpdateDataInput>;
  upsert?: Maybe<CategoriaUpsertNestedInput>;
  connect?: Maybe<CategoriaWhereUniqueInput>;
}

export interface CategoriaUpdateManyMutationInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  tags?: Maybe<CategoriaUpdatetagsInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface EmpresaSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EmpresaWhereInput>;
  AND?: Maybe<EmpresaSubscriptionWhereInput[] | EmpresaSubscriptionWhereInput>;
}

export interface DireccionUpsertNestedInput {
  update: DireccionUpdateDataInput;
  create: DireccionCreateInput;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface DireccionUpdateDataInput {
  calle?: Maybe<String>;
  numero?: Maybe<Int>;
  colonia?: Maybe<String>;
  ciudad?: Maybe<String>;
  cp?: Maybe<String>;
  estado?: Maybe<String>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface DireccionUpdateOneInput {
  create?: Maybe<DireccionCreateInput>;
  update?: Maybe<DireccionUpdateDataInput>;
  upsert?: Maybe<DireccionUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
}

export interface EmpresaWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  nombre?: Maybe<String>;
  nombre_not?: Maybe<String>;
  nombre_in?: Maybe<String[] | String>;
  nombre_not_in?: Maybe<String[] | String>;
  nombre_lt?: Maybe<String>;
  nombre_lte?: Maybe<String>;
  nombre_gt?: Maybe<String>;
  nombre_gte?: Maybe<String>;
  nombre_contains?: Maybe<String>;
  nombre_not_contains?: Maybe<String>;
  nombre_starts_with?: Maybe<String>;
  nombre_not_starts_with?: Maybe<String>;
  nombre_ends_with?: Maybe<String>;
  nombre_not_ends_with?: Maybe<String>;
  descripcion?: Maybe<String>;
  descripcion_not?: Maybe<String>;
  descripcion_in?: Maybe<String[] | String>;
  descripcion_not_in?: Maybe<String[] | String>;
  descripcion_lt?: Maybe<String>;
  descripcion_lte?: Maybe<String>;
  descripcion_gt?: Maybe<String>;
  descripcion_gte?: Maybe<String>;
  descripcion_contains?: Maybe<String>;
  descripcion_not_contains?: Maybe<String>;
  descripcion_starts_with?: Maybe<String>;
  descripcion_not_starts_with?: Maybe<String>;
  descripcion_ends_with?: Maybe<String>;
  descripcion_not_ends_with?: Maybe<String>;
  direccion?: Maybe<DireccionWhereInput>;
  horarios?: Maybe<String>;
  horarios_not?: Maybe<String>;
  horarios_in?: Maybe<String[] | String>;
  horarios_not_in?: Maybe<String[] | String>;
  horarios_lt?: Maybe<String>;
  horarios_lte?: Maybe<String>;
  horarios_gt?: Maybe<String>;
  horarios_gte?: Maybe<String>;
  horarios_contains?: Maybe<String>;
  horarios_not_contains?: Maybe<String>;
  horarios_starts_with?: Maybe<String>;
  horarios_not_starts_with?: Maybe<String>;
  horarios_ends_with?: Maybe<String>;
  horarios_not_ends_with?: Maybe<String>;
  categoria?: Maybe<CategoriaWhereInput>;
  tel?: Maybe<String>;
  tel_not?: Maybe<String>;
  tel_in?: Maybe<String[] | String>;
  tel_not_in?: Maybe<String[] | String>;
  tel_lt?: Maybe<String>;
  tel_lte?: Maybe<String>;
  tel_gt?: Maybe<String>;
  tel_gte?: Maybe<String>;
  tel_contains?: Maybe<String>;
  tel_not_contains?: Maybe<String>;
  tel_starts_with?: Maybe<String>;
  tel_not_starts_with?: Maybe<String>;
  tel_ends_with?: Maybe<String>;
  tel_not_ends_with?: Maybe<String>;
  imagen?: Maybe<String>;
  imagen_not?: Maybe<String>;
  imagen_in?: Maybe<String[] | String>;
  imagen_not_in?: Maybe<String[] | String>;
  imagen_lt?: Maybe<String>;
  imagen_lte?: Maybe<String>;
  imagen_gt?: Maybe<String>;
  imagen_gte?: Maybe<String>;
  imagen_contains?: Maybe<String>;
  imagen_not_contains?: Maybe<String>;
  imagen_starts_with?: Maybe<String>;
  imagen_not_starts_with?: Maybe<String>;
  imagen_ends_with?: Maybe<String>;
  imagen_not_ends_with?: Maybe<String>;
  rangoDePrecios?: Maybe<String>;
  rangoDePrecios_not?: Maybe<String>;
  rangoDePrecios_in?: Maybe<String[] | String>;
  rangoDePrecios_not_in?: Maybe<String[] | String>;
  rangoDePrecios_lt?: Maybe<String>;
  rangoDePrecios_lte?: Maybe<String>;
  rangoDePrecios_gt?: Maybe<String>;
  rangoDePrecios_gte?: Maybe<String>;
  rangoDePrecios_contains?: Maybe<String>;
  rangoDePrecios_not_contains?: Maybe<String>;
  rangoDePrecios_starts_with?: Maybe<String>;
  rangoDePrecios_not_starts_with?: Maybe<String>;
  rangoDePrecios_ends_with?: Maybe<String>;
  rangoDePrecios_not_ends_with?: Maybe<String>;
  ranking?: Maybe<Int>;
  ranking_not?: Maybe<Int>;
  ranking_in?: Maybe<Int[] | Int>;
  ranking_not_in?: Maybe<Int[] | Int>;
  ranking_lt?: Maybe<Int>;
  ranking_lte?: Maybe<Int>;
  ranking_gt?: Maybe<Int>;
  ranking_gte?: Maybe<Int>;
  AND?: Maybe<EmpresaWhereInput[] | EmpresaWhereInput>;
}

export interface EmpresaUpdateInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  direccion?: Maybe<DireccionUpdateOneInput>;
  horarios?: Maybe<String>;
  categoria?: Maybe<CategoriaUpdateOneRequiredInput>;
  tel?: Maybe<String>;
  imagen?: Maybe<String>;
  rangoDePrecios?: Maybe<String>;
  ranking?: Maybe<Int>;
}

export interface CategoriaWhereInput {
  _id?: Maybe<ID_Input>;
  _id_not?: Maybe<ID_Input>;
  _id_in?: Maybe<ID_Input[] | ID_Input>;
  _id_not_in?: Maybe<ID_Input[] | ID_Input>;
  _id_lt?: Maybe<ID_Input>;
  _id_lte?: Maybe<ID_Input>;
  _id_gt?: Maybe<ID_Input>;
  _id_gte?: Maybe<ID_Input>;
  _id_contains?: Maybe<ID_Input>;
  _id_not_contains?: Maybe<ID_Input>;
  _id_starts_with?: Maybe<ID_Input>;
  _id_not_starts_with?: Maybe<ID_Input>;
  _id_ends_with?: Maybe<ID_Input>;
  _id_not_ends_with?: Maybe<ID_Input>;
  nombre?: Maybe<String>;
  nombre_not?: Maybe<String>;
  nombre_in?: Maybe<String[] | String>;
  nombre_not_in?: Maybe<String[] | String>;
  nombre_lt?: Maybe<String>;
  nombre_lte?: Maybe<String>;
  nombre_gt?: Maybe<String>;
  nombre_gte?: Maybe<String>;
  nombre_contains?: Maybe<String>;
  nombre_not_contains?: Maybe<String>;
  nombre_starts_with?: Maybe<String>;
  nombre_not_starts_with?: Maybe<String>;
  nombre_ends_with?: Maybe<String>;
  nombre_not_ends_with?: Maybe<String>;
  descripcion?: Maybe<String>;
  descripcion_not?: Maybe<String>;
  descripcion_in?: Maybe<String[] | String>;
  descripcion_not_in?: Maybe<String[] | String>;
  descripcion_lt?: Maybe<String>;
  descripcion_lte?: Maybe<String>;
  descripcion_gt?: Maybe<String>;
  descripcion_gte?: Maybe<String>;
  descripcion_contains?: Maybe<String>;
  descripcion_not_contains?: Maybe<String>;
  descripcion_starts_with?: Maybe<String>;
  descripcion_not_starts_with?: Maybe<String>;
  descripcion_ends_with?: Maybe<String>;
  descripcion_not_ends_with?: Maybe<String>;
  AND?: Maybe<CategoriaWhereInput[] | CategoriaWhereInput>;
}

export interface CategoriaUpsertNestedInput {
  update: CategoriaUpdateDataInput;
  create: CategoriaCreateInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface CategoriaCreateInput {
  _id?: Maybe<ID_Input>;
  nombre: String;
  descripcion?: Maybe<String>;
  tags?: Maybe<CategoriaCreatetagsInput>;
}

export type EmpresaWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CategoriaCreateOneInput {
  create?: Maybe<CategoriaCreateInput>;
  connect?: Maybe<CategoriaWhereUniqueInput>;
}

export interface DireccionWhereInput {
  calle?: Maybe<String>;
  calle_not?: Maybe<String>;
  calle_in?: Maybe<String[] | String>;
  calle_not_in?: Maybe<String[] | String>;
  calle_lt?: Maybe<String>;
  calle_lte?: Maybe<String>;
  calle_gt?: Maybe<String>;
  calle_gte?: Maybe<String>;
  calle_contains?: Maybe<String>;
  calle_not_contains?: Maybe<String>;
  calle_starts_with?: Maybe<String>;
  calle_not_starts_with?: Maybe<String>;
  calle_ends_with?: Maybe<String>;
  calle_not_ends_with?: Maybe<String>;
  numero?: Maybe<Int>;
  numero_not?: Maybe<Int>;
  numero_in?: Maybe<Int[] | Int>;
  numero_not_in?: Maybe<Int[] | Int>;
  numero_lt?: Maybe<Int>;
  numero_lte?: Maybe<Int>;
  numero_gt?: Maybe<Int>;
  numero_gte?: Maybe<Int>;
  colonia?: Maybe<String>;
  colonia_not?: Maybe<String>;
  colonia_in?: Maybe<String[] | String>;
  colonia_not_in?: Maybe<String[] | String>;
  colonia_lt?: Maybe<String>;
  colonia_lte?: Maybe<String>;
  colonia_gt?: Maybe<String>;
  colonia_gte?: Maybe<String>;
  colonia_contains?: Maybe<String>;
  colonia_not_contains?: Maybe<String>;
  colonia_starts_with?: Maybe<String>;
  colonia_not_starts_with?: Maybe<String>;
  colonia_ends_with?: Maybe<String>;
  colonia_not_ends_with?: Maybe<String>;
  ciudad?: Maybe<String>;
  ciudad_not?: Maybe<String>;
  ciudad_in?: Maybe<String[] | String>;
  ciudad_not_in?: Maybe<String[] | String>;
  ciudad_lt?: Maybe<String>;
  ciudad_lte?: Maybe<String>;
  ciudad_gt?: Maybe<String>;
  ciudad_gte?: Maybe<String>;
  ciudad_contains?: Maybe<String>;
  ciudad_not_contains?: Maybe<String>;
  ciudad_starts_with?: Maybe<String>;
  ciudad_not_starts_with?: Maybe<String>;
  ciudad_ends_with?: Maybe<String>;
  ciudad_not_ends_with?: Maybe<String>;
  cp?: Maybe<String>;
  cp_not?: Maybe<String>;
  cp_in?: Maybe<String[] | String>;
  cp_not_in?: Maybe<String[] | String>;
  cp_lt?: Maybe<String>;
  cp_lte?: Maybe<String>;
  cp_gt?: Maybe<String>;
  cp_gte?: Maybe<String>;
  cp_contains?: Maybe<String>;
  cp_not_contains?: Maybe<String>;
  cp_starts_with?: Maybe<String>;
  cp_not_starts_with?: Maybe<String>;
  cp_ends_with?: Maybe<String>;
  cp_not_ends_with?: Maybe<String>;
  estado?: Maybe<String>;
  estado_not?: Maybe<String>;
  estado_in?: Maybe<String[] | String>;
  estado_not_in?: Maybe<String[] | String>;
  estado_lt?: Maybe<String>;
  estado_lte?: Maybe<String>;
  estado_gt?: Maybe<String>;
  estado_gte?: Maybe<String>;
  estado_contains?: Maybe<String>;
  estado_not_contains?: Maybe<String>;
  estado_starts_with?: Maybe<String>;
  estado_not_starts_with?: Maybe<String>;
  estado_ends_with?: Maybe<String>;
  estado_not_ends_with?: Maybe<String>;
  AND?: Maybe<DireccionWhereInput[] | DireccionWhereInput>;
}

export interface DireccionCreateOneInput {
  create?: Maybe<DireccionCreateInput>;
}

export interface DireccionCreateInput {
  calle: String;
  numero: Int;
  colonia: String;
  ciudad: String;
  cp: String;
  estado: String;
}

export interface CategoriaUpdatetagsInput {
  set?: Maybe<String[] | String>;
}

export interface CategoriaUpdateInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  tags?: Maybe<CategoriaUpdatetagsInput>;
}

export interface EmpresaUpdateManyMutationInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  horarios?: Maybe<String>;
  tel?: Maybe<String>;
  imagen?: Maybe<String>;
  rangoDePrecios?: Maybe<String>;
  ranking?: Maybe<Int>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface CategoriaSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CategoriaWhereInput>;
  AND?: Maybe<
    CategoriaSubscriptionWhereInput[] | CategoriaSubscriptionWhereInput
  >;
}

export interface CategoriaUpdateDataInput {
  nombre?: Maybe<String>;
  descripcion?: Maybe<String>;
  tags?: Maybe<CategoriaUpdatetagsInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface EmpresaConnection {
  pageInfo: PageInfo;
  edges: EmpresaEdge[];
}

export interface EmpresaConnectionPromise
  extends Promise<EmpresaConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EmpresaEdge>>() => T;
  aggregate: <T = AggregateEmpresaPromise>() => T;
}

export interface EmpresaConnectionSubscription
  extends Promise<AsyncIterator<EmpresaConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EmpresaEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEmpresaSubscription>() => T;
}

export interface EmpresaSubscriptionPayload {
  mutation: MutationType;
  node: Empresa;
  updatedFields: String[];
  previousValues: EmpresaPreviousValues;
}

export interface EmpresaSubscriptionPayloadPromise
  extends Promise<EmpresaSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EmpresaPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EmpresaPreviousValuesPromise>() => T;
}

export interface EmpresaSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EmpresaSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EmpresaSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EmpresaPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Direccion {
  calle: String;
  numero: Int;
  colonia: String;
  ciudad: String;
  cp: String;
  estado: String;
}

export interface DireccionPromise extends Promise<Direccion>, Fragmentable {
  calle: () => Promise<String>;
  numero: () => Promise<Int>;
  colonia: () => Promise<String>;
  ciudad: () => Promise<String>;
  cp: () => Promise<String>;
  estado: () => Promise<String>;
}

export interface DireccionSubscription
  extends Promise<AsyncIterator<Direccion>>,
    Fragmentable {
  calle: () => Promise<AsyncIterator<String>>;
  numero: () => Promise<AsyncIterator<Int>>;
  colonia: () => Promise<AsyncIterator<String>>;
  ciudad: () => Promise<AsyncIterator<String>>;
  cp: () => Promise<AsyncIterator<String>>;
  estado: () => Promise<AsyncIterator<String>>;
}

export interface DireccionNullablePromise
  extends Promise<Direccion | null>,
    Fragmentable {
  calle: () => Promise<String>;
  numero: () => Promise<Int>;
  colonia: () => Promise<String>;
  ciudad: () => Promise<String>;
  cp: () => Promise<String>;
  estado: () => Promise<String>;
}

export interface Empresa {
  id: ID_Output;
  nombre: String;
  descripcion?: String;
  direccion?: Direccion | null;
  horarios: String;
  tel: String;
  imagen?: String;
  rangoDePrecios?: String;
  ranking?: Int;
}

export interface EmpresaPromise extends Promise<Empresa>, Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  direccion: <T = DireccionPromise>() => T;
  horarios: () => Promise<String>;
  categoria: <T = CategoriaPromise>() => T;
  tel: () => Promise<String>;
  imagen: () => Promise<String>;
  rangoDePrecios: () => Promise<String>;
  ranking: () => Promise<Int>;
}

export interface EmpresaSubscription
  extends Promise<AsyncIterator<Empresa>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  direccion: <T = DireccionSubscription>() => T;
  horarios: () => Promise<AsyncIterator<String>>;
  categoria: <T = CategoriaSubscription>() => T;
  tel: () => Promise<AsyncIterator<String>>;
  imagen: () => Promise<AsyncIterator<String>>;
  rangoDePrecios: () => Promise<AsyncIterator<String>>;
  ranking: () => Promise<AsyncIterator<Int>>;
}

export interface EmpresaNullablePromise
  extends Promise<Empresa | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  direccion: <T = DireccionPromise>() => T;
  horarios: () => Promise<String>;
  categoria: <T = CategoriaPromise>() => T;
  tel: () => Promise<String>;
  imagen: () => Promise<String>;
  rangoDePrecios: () => Promise<String>;
  ranking: () => Promise<Int>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateCategoria {
  count: Int;
}

export interface AggregateCategoriaPromise
  extends Promise<AggregateCategoria>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCategoriaSubscription
  extends Promise<AsyncIterator<AggregateCategoria>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CategoriaEdge {
  node: Categoria;
  cursor: String;
}

export interface CategoriaEdgePromise
  extends Promise<CategoriaEdge>,
    Fragmentable {
  node: <T = CategoriaPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CategoriaEdgeSubscription
  extends Promise<AsyncIterator<CategoriaEdge>>,
    Fragmentable {
  node: <T = CategoriaSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEmpresa {
  count: Int;
}

export interface AggregateEmpresaPromise
  extends Promise<AggregateEmpresa>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEmpresaSubscription
  extends Promise<AsyncIterator<AggregateEmpresa>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface EmpresaPreviousValues {
  id: ID_Output;
  nombre: String;
  descripcion?: String;
  horarios: String;
  tel: String;
  imagen?: String;
  rangoDePrecios?: String;
  ranking?: Int;
}

export interface EmpresaPreviousValuesPromise
  extends Promise<EmpresaPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  horarios: () => Promise<String>;
  tel: () => Promise<String>;
  imagen: () => Promise<String>;
  rangoDePrecios: () => Promise<String>;
  ranking: () => Promise<Int>;
}

export interface EmpresaPreviousValuesSubscription
  extends Promise<AsyncIterator<EmpresaPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  horarios: () => Promise<AsyncIterator<String>>;
  tel: () => Promise<AsyncIterator<String>>;
  imagen: () => Promise<AsyncIterator<String>>;
  rangoDePrecios: () => Promise<AsyncIterator<String>>;
  ranking: () => Promise<AsyncIterator<Int>>;
}

export interface CategoriaPreviousValues {
  _id: ID_Output;
  nombre: String;
  descripcion?: String;
  tags: String[];
}

export interface CategoriaPreviousValuesPromise
  extends Promise<CategoriaPreviousValues>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface CategoriaPreviousValuesSubscription
  extends Promise<AsyncIterator<CategoriaPreviousValues>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
}

export interface CategoriaSubscriptionPayload {
  mutation: MutationType;
  node: Categoria;
  updatedFields: String[];
  previousValues: CategoriaPreviousValues;
}

export interface CategoriaSubscriptionPayloadPromise
  extends Promise<CategoriaSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CategoriaPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CategoriaPreviousValuesPromise>() => T;
}

export interface CategoriaSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CategoriaSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CategoriaSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CategoriaPreviousValuesSubscription>() => T;
}

export interface Categoria {
  _id: ID_Output;
  nombre: String;
  descripcion?: String;
  tags: String[];
}

export interface CategoriaPromise extends Promise<Categoria>, Fragmentable {
  _id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface CategoriaSubscription
  extends Promise<AsyncIterator<Categoria>>,
    Fragmentable {
  _id: () => Promise<AsyncIterator<ID_Output>>;
  nombre: () => Promise<AsyncIterator<String>>;
  descripcion: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
}

export interface CategoriaNullablePromise
  extends Promise<Categoria | null>,
    Fragmentable {
  _id: () => Promise<ID_Output>;
  nombre: () => Promise<String>;
  descripcion: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface EmpresaEdge {
  node: Empresa;
  cursor: String;
}

export interface EmpresaEdgePromise extends Promise<EmpresaEdge>, Fragmentable {
  node: <T = EmpresaPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EmpresaEdgeSubscription
  extends Promise<AsyncIterator<EmpresaEdge>>,
    Fragmentable {
  node: <T = EmpresaSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CategoriaConnection {
  pageInfo: PageInfo;
  edges: CategoriaEdge[];
}

export interface CategoriaConnectionPromise
  extends Promise<CategoriaConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CategoriaEdge>>() => T;
  aggregate: <T = AggregateCategoriaPromise>() => T;
}

export interface CategoriaConnectionSubscription
  extends Promise<AsyncIterator<CategoriaConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CategoriaEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCategoriaSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Categoria",
    embedded: false
  },
  {
    name: "Empresa",
    embedded: false
  },
  {
    name: "Direccion",
    embedded: true
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
