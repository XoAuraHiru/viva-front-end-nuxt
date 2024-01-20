<template>
    <tr>
        <td>
            <AdminCatalogText>11</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogUser/>
        </td>
        <td>
            <AdminCatalogText>Username</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText>Premium</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText>13</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText>1</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText :color="'green'">Approved</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText>05.02.2023</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogBtns 
                :status="true"
                :edit="true"
                :delete="true"
            />
        </td>
    </tr>
</template>


<style lang="scss" scoped></style>