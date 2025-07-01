macro_rules! tys {
    (@last $first:ident $($rest:ident)+) => {
        tys!(@last $($rest)+)
    };
    (@last $last:ident) => {
        $last
    };

    ($($name:ident)*) => {
        #[allow(non_camel_case_types)]
        #[repr(u32)]
        #[derive(PartialEq, Eq, Debug, Clone, Copy, Hash)]
        pub enum Tys {
            $(
                $name,
            )*
        }

        $(
            pub const $name: u32 = Tys::$name as u32;
        )*

        impl TryFrom<u32> for Tys {
            type Error = u32;

            fn try_from(value: u32) -> Result<Self, Self::Error> {
                if value <= tys!(@last $($name)*) {
                    Ok(unsafe { std::mem::transmute::<u32, Self>(value) })
                } else {
                    Err(value)
                }
            }
        }
    };
}

tys! {
    I8
    U8
    I16
    U16
    I32
    U32
    I64
    U64
    I128
    U128
    F32
    F64
    BOOLEAN
    FUNCTION
    CLOSURE
    CACHED_STRING
    STRING
    REF
    REFMUT
    LONGREF
    SLICE
    VECTOR
    EXTERNREF
    NAMED_EXTERNREF
    ENUM
    STRING_ENUM
    RUST_STRUCT
    CHAR
    OPTIONAL
    RESULT
    UNIT
    CLAMPED
    NONNULL
}
