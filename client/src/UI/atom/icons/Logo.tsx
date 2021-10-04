export interface ILogo extends React.SVGProps<SVGSVGElement> {
  size: 'lg' | 'md' | 'sm'
}
const Logo: React.FC<ILogo> = ({ size }, props) => {
  return (
    <>
      {size === 'lg' && (
        <>
          <svg
            width={69}
            height={49}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M10.435 31.215c-.366 0-.748-.018-1.148-.053a2.657 2.657 0 01-1.122-.313c-.348-.191-.643-.53-.887-1.017-.226-.47-.365-1.148-.417-2.035-1.983-.26-3.496-1.06-4.54-2.4-1.025-1.34-1.538-3.06-1.538-5.165 0-1.53.278-2.87.834-4.017a5.977 5.977 0 012.505-2.661c1.13-.644 2.53-.966 4.2-.966 1.635 0 3.008.322 4.122.966a5.977 5.977 0 012.504 2.66c.574 1.13.86 2.47.86 4.018 0 1.948-.469 3.591-1.408 4.93-.922 1.322-2.287 2.174-4.096 2.557 0 .382.07.6.209.652.156.07.513.104 1.07.104-.07 0 .043-.008.339-.026h.965l-.052 2.74H11.479c-.314.017-.583.026-.81.026h-.234zM8.27 24.3c1.287 0 2.243-.382 2.87-1.147.625-.766.938-1.783.938-3.053s-.313-2.287-.939-3.052c-.626-.782-1.582-1.174-2.87-1.174-1.234 0-2.173.374-2.817 1.122-.643.73-.965 1.765-.965 3.104 0 1.27.313 2.287.94 3.053C6.051 23.919 7 24.3 8.27 24.3zm12.858 3.496c-.783 0-1.417-.14-1.904-.417a3.08 3.08 0 01-1.096-1.07 4.687 4.687 0 01-.496-1.435 11.671 11.671 0 01-.156-1.487v-6.652h3.548v5.452c0 .366.026.74.078 1.122.07.365.226.678.47.94.26.243.678.364 1.252.364s.982-.121 1.226-.365c.243-.26.391-.574.443-.939.052-.383.079-.756.079-1.122v-5.452h3.756v10.8h-3.156l-.6-1.722h-.053l-.156.314c-.087.19-.252.417-.496.678-.243.26-.591.495-1.043.704-.435.191-1 .287-1.696.287zm11.759 0c-.974 0-1.765-.26-2.374-.782-.591-.54-.887-1.235-.887-2.088 0-.73.2-1.295.6-1.695.417-.418.948-.74 1.591-.965.661-.244 1.357-.444 2.087-.6a20.275 20.275 0 001.67-.444c.382-.122.635-.252.756-.391a.907.907 0 00.183-.574c0-.278-.122-.504-.365-.678-.226-.174-.522-.261-.887-.261-.261 0-.53.06-.809.182-.26.105-.47.296-.626.574-.157.279-.2.67-.13 1.174h-3.392c0-1.13.235-2.026.705-2.687a3.917 3.917 0 011.878-1.434 6.603 6.603 0 012.4-.444c.817 0 1.591.13 2.322.391.747.261 1.356.687 1.826 1.279.47.59.704 1.382.704 2.373v2.974c0 .261.017.54.052.835.035.296.148.513.34.652.19.122.53.07 1.017-.156l-.026 1.956c0-.017-.087.044-.261.183-.157.14-.409.278-.757.417-.348.14-.808.21-1.382.21-.679 0-1.2-.114-1.566-.34-.365-.226-.626-.496-.782-.809a2.861 2.861 0 01-.235-.939 12.341 12.341 0 01-.026-.626v-.34c-.261.853-.67 1.575-1.226 2.166-.557.591-1.357.887-2.4.887zm1.565-2.53c.33-.052.652-.244.965-.574.313-.33.574-.74.783-1.226a4.055 4.055 0 00.313-1.566c-.105.122-.322.235-.652.34-.33.104-.6.2-.809.287a4.23 4.23 0 00-1.252.756c-.365.33-.53.73-.496 1.2.035.348.183.574.444.678.278.087.513.122.704.105z"
              fill="#F6FEF7"
            />
            <path
              d="M50 24.638a2.899 2.899 0 10-5.797 0 2.899 2.899 0 005.797 0z"
              fill="#A3F5B1"
            />
          </svg>
        </>
      )}

      {size === 'md' && (
        <>
          <svg
            width={50}
            height={39}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M14.4 43.076c-.504 0-1.032-.024-1.584-.072a3.667 3.667 0 01-1.548-.432c-.48-.264-.888-.732-1.224-1.404-.312-.648-.504-1.584-.576-2.808-2.736-.36-4.824-1.464-6.264-3.312C1.788 33.2 1.08 30.824 1.08 27.92c0-2.112.384-3.96 1.152-5.544a8.249 8.249 0 013.456-3.672c1.56-.888 3.492-1.332 5.796-1.332 2.256 0 4.152.444 5.688 1.332a8.249 8.249 0 013.456 3.672c.792 1.56 1.188 3.408 1.188 5.544 0 2.688-.648 4.956-1.944 6.804-1.272 1.824-3.156 3-5.652 3.528 0 .528.096.828.288.9.216.096.708.144 1.476.144-.096 0 .06-.012.468-.036h1.332l-.072 3.78H15.84c-.432.024-.804.036-1.116.036H14.4zm-2.988-9.54c1.776 0 3.096-.528 3.96-1.584.864-1.056 1.296-2.46 1.296-4.212 0-1.752-.432-3.156-1.296-4.212-.864-1.08-2.184-1.62-3.96-1.62-1.704 0-3 .516-3.888 1.548-.888 1.008-1.332 2.436-1.332 4.284 0 1.752.432 3.156 1.296 4.212.864 1.056 2.172 1.584 3.924 1.584zm17.745 4.824c-1.08 0-1.956-.192-2.628-.576a4.249 4.249 0 01-1.512-1.476 6.468 6.468 0 01-.684-1.98 16.14 16.14 0 01-.216-2.052v-9.18h4.896v7.524c0 .504.036 1.02.108 1.548.096.504.312.936.648 1.296.36.336.936.504 1.728.504.792 0 1.356-.168 1.692-.504.336-.36.54-.792.612-1.296.072-.528.108-1.044.108-1.548v-7.524h5.184V38h-4.356l-.828-2.376h-.072l-.216.432c-.12.264-.348.576-.684.936-.336.36-.816.684-1.44.972-.6.264-1.38.396-2.34.396zm16.227 0c-1.344 0-2.436-.36-3.276-1.08-.816-.744-1.224-1.704-1.224-2.88 0-1.008.276-1.788.828-2.34.576-.576 1.308-1.02 2.196-1.332a21.123 21.123 0 012.88-.828c1.032-.24 1.8-.444 2.304-.612.528-.168.876-.348 1.044-.54a1.25 1.25 0 00.252-.792c0-.384-.168-.696-.504-.936-.312-.24-.72-.36-1.224-.36-.36 0-.732.084-1.116.252-.36.144-.648.408-.864.792-.216.384-.276.924-.18 1.62h-4.68c0-1.56.324-2.796.972-3.708a5.405 5.405 0 012.592-1.98 9.11 9.11 0 013.312-.612c1.128 0 2.196.18 3.204.54 1.032.36 1.872.948 2.52 1.764.648.816.972 1.908.972 3.276v4.104c0 .36.024.744.072 1.152.048.408.204.708.468.9.264.168.732.096 1.404-.216l-.036 2.7c0-.024-.12.06-.36.252-.216.192-.564.384-1.044.576-.48.192-1.116.288-1.908.288-.936 0-1.656-.156-2.16-.468-.504-.312-.864-.684-1.08-1.116a3.95 3.95 0 01-.324-1.296 17.046 17.046 0 01-.036-.864v-.468c-.36 1.176-.924 2.172-1.692 2.988-.768.816-1.872 1.224-3.312 1.224zm2.16-3.492c.456-.072.9-.336 1.332-.792.432-.456.792-1.02 1.08-1.692a5.597 5.597 0 00.432-2.16c-.144.168-.444.324-.9.468-.456.144-.828.276-1.116.396-.624.24-1.2.588-1.728 1.044-.504.456-.732 1.008-.684 1.656.048.48.252.792.612.936.384.12.708.168.972.144z"
              fill="#F6FEF7"
            />
            <path d="M69 34a4 4 0 10-8 0 4 4 0 008 0z" fill="#A3F5B1" />
          </svg>
        </>
      )}
      {size === 'sm' && <></>}
    </>
  )
}

export default Logo
