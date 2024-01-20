
import type { viewDepthKey } from 'vue-router';
<template>
    <tr>
        <td>
            <AdminCatalogText>11</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogUser/>
        </td>
        <td>
            <AdminCatalogText>05.02.2023</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText :color="'green'">Paid</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText>LKR 4000</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogBtns 
                :view="true"
                :edit="true"
                :delete="true"
                :refund="true"
            />
        </td>
    </tr>
</template>


<style lang="scss" scoped></style>