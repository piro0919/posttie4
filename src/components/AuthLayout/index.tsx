"use client";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Input,
  Link as KumaUiLink,
} from "@kuma-ui/core";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const caveat = Caveat({ subsets: ["latin"] });

export type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
  const pathname = usePathname();
  const index = useMemo(() => {
    switch (pathname) {
      case "/": {
        return 0;
      }
      case "/reply": {
        return 1;
      }
      case "/favorite": {
        return 2;
      }
      default: {
        return -1;
      }
    }
  }, [pathname]);
  const timelineWidth = useMemo(() => "720px", []);

  return (
    <Grid gridTemplateRows="auto 1fr" minHeight="100dvh">
      <Grid
        as="header"
        bg="rgba(255, 255, 255, 0.95)"
        borderColor="#dcddde"
        borderStyle="solid"
        borderWidth="0 0 1px"
        gap="16px"
        gridTemplateColumns={`1fr ${timelineWidth} 1fr`}
        gridTemplateRows="48px"
        position="sticky"
        px="24px"
        style={{ backdropFilter: "blur(1px)" }}
        top="0"
      >
        <Flex alignItems="center" justify="flex-end">
          <Box width="200px">
            <Link href="/" legacyBehavior={true} passHref={true}>
              <KumaUiLink>
                <Heading
                  className={caveat.className}
                  color="#238f76"
                  fontSize="3.8rem"
                  letterSpacing={2}
                >
                  Posttie
                </Heading>
              </KumaUiLink>
            </Link>
          </Box>
        </Flex>
        <Grid
          as="nav"
          gridTemplateColumns="repeat(3, 1fr)"
          overflow="hidden"
          position="relative"
        >
          <Link href="/" legacyBehavior={true} passHref={true}>
            <KumaUiLink>
              <Flex
                alignItems="center"
                fontWeight="bold"
                height="100%"
                justify="center"
              >
                ホーム
              </Flex>
            </KumaUiLink>
          </Link>
          <Link href="/reply" legacyBehavior={true} passHref={true}>
            <KumaUiLink>
              <Flex
                alignItems="center"
                fontWeight="bold"
                height="100%"
                justify="center"
              >
                返信
              </Flex>
            </KumaUiLink>
          </Link>
          <Link href="/favorite" legacyBehavior={true} passHref={true}>
            <KumaUiLink>
              <Flex
                alignItems="center"
                fontWeight="bold"
                height="100%"
                justify="center"
              >
                お気に入り
              </Flex>
            </KumaUiLink>
          </Link>
          <Box
            bg="#238f76"
            borderRadius="100vmax"
            bottom="0"
            height="4px"
            left="0"
            ml={`calc(100% / 3 * ${index})`}
            position="absolute"
            transition="250ms"
            width="calc(100% / 3)"
          />
        </Grid>
        <Flex alignItems="center">
          <Box width="240px">
            <Input
              borderColor="#dcddde"
              borderRadius="100vmax"
              borderStyle="solid"
              borderWidth="1px"
              px="12px"
              py="8px"
              width="100%"
            />
          </Box>
        </Flex>
      </Grid>
      <Flex as="main" justify="center">
        <Box
          borderColor="#dcddde"
          borderStyle="solid"
          borderWidth="0 1px"
          height="100%"
          width={timelineWidth}
        >
          {children}
        </Box>
      </Flex>
    </Grid>
  );
}
